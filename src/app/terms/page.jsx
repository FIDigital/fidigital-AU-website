import { JsonLd, buildBreadcrumb, buildOpenGraph } from "@/lib/jsonLd";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for FI Digital Australia. Governing law, engagement contracts, intellectual property, confidentiality, and limitation of liability.",
  alternates: { canonical: "https://fidigital.com.au/terms" },
  openGraph: buildOpenGraph({ title: "Terms of Service", description: "Terms of Service for FI Digital Australia. Governing law, engagement contracts, intellectual property, confidentiality, and limitation of liability.", path: "/terms" }),
};

const SECTIONS = [
  { heading: "1. About these terms", body: 'FI Digital Australia ("we", "us", "FI Digital") provides technology consulting and implementation services. These terms apply to use of fidigital.com.au and to engagement under separate written contracts.' },
  { heading: "2. Engagement contracts", body: "All paid services are governed by separately signed Statements of Work. Where these terms conflict with a Statement of Work, the Statement of Work takes precedence." },
  { heading: "3. Intellectual property", body: "Custom software, source code, configurations, and deliverables created under an engagement are owned by the client on full payment, except for our pre-existing tools and frameworks." },
  { heading: "4. Confidentiality", body: "We treat all client information as confidential. Mutual NDAs are signed before commercial engagement." },
  { heading: "5. Service levels", body: "Service levels, response times, and uptime commitments are agreed per engagement in writing." },
  { heading: "6. Limitation of liability", body: "Our liability is limited to the fees paid under the relevant engagement in the 12 months preceding any claim, except where Australian law prohibits limitation." },
  { heading: "7. Privacy", body: "Our handling of personal information is governed by our Privacy Policy, available at /privacy. We comply with the Australian Privacy Principles under the Privacy Act 1988." },
  { heading: "8. Governing law", body: "These terms are governed by the laws of Victoria, Australia. Disputes are resolved in Victorian courts unless otherwise agreed in writing." },
  { heading: "9. Contact", body: "For terms questions: legal@fidigital.com.au." },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumb([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <main style={{ paddingTop: "var(--header-h)", background: "var(--bg)", color: "var(--text)" }}>
        <section className="section" style={{ padding: "clamp(100px, 12vh, 160px) 1.5rem 100px" }}>
          <div className="container" style={{ maxWidth: "820px" }}>
            <h1 className="section-title" style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 900, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
              Terms of Service
            </h1>

            <div style={{ background: "rgba(29, 78, 216, 0.06)", border: "1px solid rgba(29, 78, 216, 0.2)", borderLeft: "4px solid var(--primary)", borderRadius: "0 12px 12px 0", padding: "1.25rem 1.5rem", marginBottom: "3rem" }}>
              <p style={{ margin: 0, color: "var(--text)", fontSize: "1rem", lineHeight: 1.6 }}>
                These terms were last updated 30 May 2026. Please review with your legal team before signing engagement contracts.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
              {SECTIONS.map((s, i) => (
                <div key={i}>
                  <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>{s.heading}</h2>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>{s.body}</p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: "3rem", fontSize: "0.95rem", color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.7 }}>
              [PLACEHOLDER: Send to lawyer for review and finalisation before relying on this in commercial engagements.]
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
