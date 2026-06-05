import { JsonLd, buildBreadcrumb, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for FI Digital Australia. How we collect, use, and protect personal information in accordance with the Australian Privacy Principles under the Privacy Act 1988 (Cth).",
  alternates: { canonical: "https://fidigital.com.au/privacy" },
  openGraph: buildOpenGraph({ title: "Privacy Policy", description: "Privacy Policy for FI Digital Australia. How we collect, use, and protect personal information in accordance with the Australian Privacy Principles under the Privacy Act 1988 (Cth).", path: "/privacy" }),
};

const SECTIONS = [
  {
    heading: "Our commitment",
    body: "We handle personal information in accordance with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth), including the Notifiable Data Breaches scheme.",
  },
  {
    heading: "Information we collect",
    body: "We collect personal information you provide directly — such as your name, email address, phone number, and company — when you contact us, book a discovery session, or request information. We also collect limited technical information (such as analytics and usage data) when you visit fidigital.com.au.",
  },
  {
    heading: "How we use your information",
    body: "We use your information to respond to enquiries, deliver our services, manage engagements, and improve our website. We do not sell your personal information.",
  },
  {
    heading: "Third-party services",
    body: "We use trusted third-party tools to operate our business, including Zoho (CRM and live chat) and website analytics. These providers process information on our behalf under their own privacy obligations.",
  },
  {
    heading: "Data residency and security",
    body: "Where practicable, client data is hosted within Australia (AWS Sydney or Azure Australia East). We apply reasonable technical and organisational measures to protect personal information against misuse, loss, and unauthorised access.",
  },
  {
    heading: "Access, correction, and complaints",
    body: "You may request access to or correction of your personal information at any time. If you believe we have breached the Australian Privacy Principles, you may contact us, and you may also lodge a complaint with the Office of the Australian Information Commissioner (OAIC).",
  },
  {
    heading: "Contact",
    body: "For privacy questions or requests, contact us at support@fidigital.com.au.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <main style={{ paddingTop: "var(--header-h)", background: "var(--bg)", color: "var(--text)" }}>
        <section className="section" style={{ padding: "clamp(100px, 12vh, 160px) 1.5rem 100px" }}>
          <div className="container" style={{ maxWidth: "820px" }}>
            <h1 className="section-title" style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 900, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "3rem" }}>
              Last updated: 1 June 2026
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
              {SECTIONS.map((s, i) => (
                <div key={i}>
                  <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>{s.heading}</h2>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: "3rem", fontSize: "0.95rem", color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.7 }}>
              [PLACEHOLDER: Confirm full Privacy Policy content with legal before relying on this for compliance.]
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
