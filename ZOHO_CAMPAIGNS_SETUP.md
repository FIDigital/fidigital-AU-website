# Zoho Campaigns Setup — Lead-Magnet (Task 39)

Wires the `/resources/zoho-modernisation-checklist` form to Zoho Campaigns so each
submission is added to a list, and the list's autoresponder emails the checklist
(a holding email until the real PDF is ready).

The website side is **already built**:
- Form page: `src/app/resources/zoho-modernisation-checklist/`
- API route: `src/app/api/lead-magnet/route.js` (calls Zoho Campaigns `listsubscribe`)
- It runs in "placeholder mode" (shows success, doesn't subscribe) until the env vars below are set.

---

## Part 1 — In Zoho Campaigns (no code)
1. **Create a list:** Contacts → Manage Lists → **New List** → e.g. "Zoho Modernisation Checklist".
   - Set **single opt-in** if you want the email to send immediately on submit.
     (Double opt-in sends a confirmation first; autoresponder fires after the user confirms.)
2. **Add a "Company" field** to the list if it doesn't exist (Contacts → custom fields), so the company value is stored.
3. **Create the autoresponder:** Automation → Autoresponders → **List Signup** → target the list →
   design the email (subject e.g. "Your Zoho Modernisation Checklist"; body = holding message now,
   attach/link the real PDF later) → **activate**.
4. **Get the List Key:** open the list → the `listkey` is in the list's API details / URL. Save it.

## Part 2 — API credentials (OAuth, one time)
Use the API console for your data centre (AU shown):
1. Go to **https://api-console.zoho.com.au** → **Add Client** → **Self Client** → Create.
2. **Scope:** `ZohoCampaigns.contact.CREATE`  ·  **Time:** 10 min  ·  generate the **grant code**.
3. Exchange the grant code for tokens (run once, replace placeholders):
   ```
   curl -X POST "https://accounts.zoho.com.au/oauth/v2/token" \
     -d "grant_type=authorization_code" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET" \
     -d "code=PASTED_GRANT_CODE"
   ```
   The response contains a **`refresh_token`** (long-lived — this is the one we store).

## Part 3 — Give me / set these env vars
Put them in `.env.local` (local) **and** the hosting provider's env (production). Never commit real values.
See `.env.example` for the template.
```
ZOHO_ACCOUNTS_DOMAIN=accounts.zoho.com.au      # match your data centre (.com / .com.au / .eu / .in)
ZOHO_CAMPAIGNS_DOMAIN=campaigns.zoho.com.au
ZOHO_CAMPAIGNS_CLIENT_ID=...
ZOHO_CAMPAIGNS_CLIENT_SECRET=...
ZOHO_CAMPAIGNS_REFRESH_TOKEN=...               # from Part 2
ZOHO_CAMPAIGNS_LIST_KEY=...                     # from Part 1
```
Restart the app after setting them.

## How the integration works (for reference)
- Form POSTs `{name, email, company}` → `src/app/api/lead-magnet/route.js`.
- The route refreshes a short-lived access token using the refresh token, then calls
  `https://campaigns.zoho.com.au/api/v1.1/json/listsubscribe` with the contact info + list key.
- Zoho adds the contact to the list → the list's autoresponder sends the checklist email.
- Access tokens expire hourly; the refresh token is used to mint new ones automatically — no manual rotation.

## Data-centre note
The `accounts.` and `campaigns.` domains **must match the region your Zoho account lives in**
(AU = `.com.au`, US = `.com`, EU = `.eu`, IN = `.in`). The OAuth token and the API must use the same region.
