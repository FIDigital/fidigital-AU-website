import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd, buildBreadcrumb, buildOpenGraph, SITE_URL, ORG_ID } from "@/lib/jsonLd";

export const metadata = {
  title: "Zoho, AI & Data Consulting in Melbourne",
  description: "FI Digital is headquartered in Melbourne at Level 9, 440 Collins Street. Software, data platforms, AI agents, and Zoho consulting for Victorian enterprise.",
  alternates: { canonical: "https://fidigital.com.au/locations/melbourne" },
  openGraph: buildOpenGraph({ title: "Zoho, AI & Data Consulting in Melbourne", description: "FI Digital is headquartered in Melbourne at Level 9, 440 Collins Street. Software, data platforms, AI agents, and Zoho consulting for Victorian enterprise.", path: "/locations/melbourne" }),
};

const SERVICES = [
  "Custom software development (web, mobile, SaaS)",
  "Data platforms — Databricks, Snowflake, Microsoft Fabric",
  "AI agents, RAG, and workflow automation",
  "Zoho CRM, Books, Creator, and Desk implementation",
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/locations/melbourne#localbusiness`,
  name: "FI Digital Australia — Melbourne",
  url: `${SITE_URL}/locations/melbourne`,
  telephone: "+61 1300 921 280",
  email: "support@fidigital.com.au",
  parentOrganization: { "@id": ORG_ID },
  address: [
    { "@type": "PostalAddress", streetAddress: "Level 9, 440 Collins Street", addressLocality: "Melbourne", addressRegion: "VIC", postalCode: "3000", addressCountry: "AU" },
    { "@type": "PostalAddress", streetAddress: "3 Tanunda Street", addressLocality: "Vermont South", addressRegion: "VIC", postalCode: "3133", addressCountry: "AU" },
  ],
  areaServed: { "@type": "State", name: "Victoria" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
};

export default function MelbourneLocationPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Melbourne", path: "/locations/melbourne" },
          ]),
          localBusinessJsonLd,
        ]}
      />
      <main style={{ paddingTop: "var(--header-h)", background: "var(--bg)", color: "var(--text)" }}>

        {/* HERO */}
        <section className="section" style={{ padding: "clamp(100px, 12vh, 160px) 1.5rem 80px", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Melbourne</div>
            <h1 className="section-title" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "1.5rem", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              FI Digital in Melbourne — Software, Data & AI for Victorian Enterprise
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
              FI Digital is headquartered in Melbourne at Level 9, 440 Collins Street, with a second office in Vermont South. Our Melbourne consultants serve clients across the Melbourne CBD, eastern suburbs, and broader Victoria — including financial services firms, healthcare providers, mining and logistics operators, and energy retailers.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="section-title" style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem" }}>Services offered from Melbourne</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem" }}>
              {SERVICES.map((s, i) => (
                <li key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem 1.5rem", fontSize: "1.1rem", fontWeight: 600, color: "var(--text)" }}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CLIENTS PLACEHOLDER */}
        <section className="section" style={{ padding: "80px 1.5rem" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="section-title" style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1.5rem" }}>Melbourne clients we have worked with</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, fontStyle: "italic", margin: 0 }}>
              [PLACEHOLDER: Insert 3-4 Melbourne-specific client logos or case studies once approved.]
            </p>
          </div>
        </section>

        {/* OFFICE DETAILS */}
        <section className="section" style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="section-title" style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem" }}>Office details</h2>
            <div style={{ display: "grid", gap: "1.5rem", fontSize: "1.05rem", color: "var(--text)", lineHeight: 1.8 }}>
              <p style={{ margin: 0 }}><strong>Melbourne HQ</strong> — Level 9, 440 Collins Street, Melbourne VIC 3000</p>
              <p style={{ margin: 0 }}><strong>Vermont South office</strong> — 3 Tanunda Street, Vermont South VIC 3133</p>
              <p style={{ margin: 0 }}><strong>Phone:</strong> 1300 921 280</p>
              <p style={{ margin: 0 }}><strong>Hours:</strong> Mon-Fri 9:00am - 5:30pm AEST</p>
            </div>
            <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              [PLACEHOLDER: Embed Google Maps for Collins Street office.]
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ padding: "90px 1.5rem", textAlign: "center" }}>
          <Link href="/book-discovery" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "var(--primary)", color: "#fff", padding: "1.1rem 2.5rem", borderRadius: "100px", fontSize: "1.1rem", fontWeight: 800, textDecoration: "none" }}>
            Book a Discovery Session <ArrowRight size={20} />
          </Link>
        </section>
      </main>
    </>
  );
}
