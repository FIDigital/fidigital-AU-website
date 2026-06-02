import { NextResponse } from "next/server";

/*
 * Lead-magnet subscribe endpoint (sprint Task 39) → Zoho Campaigns.
 *
 * Adds {name, email, company} to a Zoho Campaigns list via the listsubscribe API.
 * The list's autoresponder then sends the checklist email (holding email until the
 * real PDF is supplied).
 *
 * Required env vars (set in .env.local locally + hosting env in production — never commit):
 *   ZOHO_CAMPAIGNS_CLIENT_ID
 *   ZOHO_CAMPAIGNS_CLIENT_SECRET
 *   ZOHO_CAMPAIGNS_REFRESH_TOKEN
 *   ZOHO_CAMPAIGNS_LIST_KEY
 *   ZOHO_ACCOUNTS_DOMAIN     (data-centre specific, default accounts.zoho.com.au)
 *   ZOHO_CAMPAIGNS_DOMAIN    (data-centre specific, default campaigns.zoho.com.au)
 *
 * Until these are set the route returns { ok:true, configured:false } so the form
 * still shows the success state (placeholder mode) without subscribing anyone.
 */

const {
  ZOHO_CAMPAIGNS_CLIENT_ID,
  ZOHO_CAMPAIGNS_CLIENT_SECRET,
  ZOHO_CAMPAIGNS_REFRESH_TOKEN,
  ZOHO_CAMPAIGNS_LIST_KEY,
  ZOHO_ACCOUNTS_DOMAIN = "accounts.zoho.com.au",
  ZOHO_CAMPAIGNS_DOMAIN = "campaigns.zoho.com.au",
} = process.env;

async function getAccessToken() {
  const params = new URLSearchParams({
    refresh_token: ZOHO_CAMPAIGNS_REFRESH_TOKEN,
    client_id: ZOHO_CAMPAIGNS_CLIENT_ID,
    client_secret: ZOHO_CAMPAIGNS_CLIENT_SECRET,
    grant_type: "refresh_token",
  });
  const res = await fetch(`https://${ZOHO_ACCOUNTS_DOMAIN}/oauth/v2/token?${params.toString()}`, { method: "POST" });
  const data = await res.json();
  if (!data.access_token) throw new Error(`Zoho token refresh failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

export async function POST(request) {
  try {
    const { name = "", email = "", company = "" } = await request.json();

    if (!email || !/.+@.+\..+/.test(email)) {
      return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    }

    const configured =
      ZOHO_CAMPAIGNS_CLIENT_ID && ZOHO_CAMPAIGNS_CLIENT_SECRET &&
      ZOHO_CAMPAIGNS_REFRESH_TOKEN && ZOHO_CAMPAIGNS_LIST_KEY;

    if (!configured) {
      console.warn("[lead-magnet] Zoho Campaigns env vars not set — placeholder mode (no subscribe).");
      return NextResponse.json({ ok: true, configured: false });
    }

    const accessToken = await getAccessToken();

    const contactinfo = JSON.stringify({
      "Contact Email": email,
      "First Name": name,
      "Company": company,
    });
    const params = new URLSearchParams({
      resfmt: "JSON",
      listkey: ZOHO_CAMPAIGNS_LIST_KEY,
      contactinfo,
    });

    const res = await fetch(
      `https://${ZOHO_CAMPAIGNS_DOMAIN}/api/v1.1/json/listsubscribe?${params.toString()}`,
      { method: "POST", headers: { Authorization: `Zoho-oauthtoken ${accessToken}` } }
    );
    const data = await res.json();

    if (data.status === "error") {
      console.error("[lead-magnet] Zoho subscribe error:", data);
      return NextResponse.json({ ok: false, error: data.message || "Subscribe failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, configured: true });
  } catch (err) {
    console.error("[lead-magnet] error:", err);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
