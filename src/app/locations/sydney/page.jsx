import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd, buildBreadcrumb, buildOpenGraph, SITE_URL, ORG_ID } from "@/lib/jsonLd";

export const metadata = {
  title: "Zoho, AI & Data Consulting in Sydney",
  description: "FI Digital supports Sydney and NSW enterprise with software, data platforms, AI agents, and Zoho consulting. Financial services and healthcare specialisation.",
  alternates: { canonical: "https://fidigital.com.au/locations/sydney" },
  openGraph: buildOpenGraph({ title: "Zoho, AI & Data Consulting in Sydney", description: "FI Digital supports Sydney and NSW enterprise with software, data platforms, AI agents, and Zoho consulting. Financial services and healthcare specialisation.", path: "/locations/sydney" }),
};

const SERVICES = [
  "Custom software development for financial services and healthcare",
  "Data platforms on Databricks, Snowflake, Microsoft Fabric for regulated industries",
  "AI agents for KYC, AML, fraud detection, and clinical decision support",
  "Zoho implementation and integration",
];

const SECTORS = [
  { name: "Financial Services & Wealth", desc: "APRA CPS 234 / CPS 230 compliance, ASIC reporting" },
  { name: "Healthcare & Aged Care", desc: "Privacy Act 1988, My Health Record integration, ACSC Essential 8" },
];

// Sydney is service-area only (no physical Sydney office).
const sydneyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/locations/sydney#serviceArea`,
  name: "FI Digital Australia — Sydney",
  url: `${SITE_URL}/locations/sydney`,
  telephone: "+61 1300 921 280",
  email: "info@fidigital.com.au",
  parentOrganization: { "@id": ORG_ID },
  areaServed: [
    { "@type": "City", name: "Sydney" },
    { "@type": "State", name: "New South Wales" },
  ],
};

export default function SydneyLocationPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumb([
            { name: "Home", path: "/" },
            { name: "Sydney", path: "/locations/sydney" },
          ]),
          sydneyJsonLd,
        ]}
      />
      <main style={{ paddingTop: "var(--header-h)", background: "var(--bg)", color: "var(--text)" }}>

        {/* HERO */}
        <section className="section" style={{ padding: "clamp(100px, 12vh, 160px) 1.5rem 80px", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>Sydney</div>
            <h1 className="section-title" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "1.5rem", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              FI Digital in Sydney — Software, Data & AI for NSW Enterprise
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
              FI Digital supports clients across Sydney and New South Wales, with on-site engagement delivery and remote support. Our Sydney engagements focus on financial services, wealth management, and healthcare clients across the Sydney CBD, North Shore, and Western Sydney corridors.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="section-title" style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem" }}>Services delivered to Sydney clients</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem" }}>
              {SERVICES.map((s, i) => (
                <li key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1.25rem 1.5rem", fontSize: "1.1rem", fontWeight: 600, color: "var(--text)" }}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTOR SPECIALISATION */}
        <section className="section" style={{ padding: "80px 1.5rem" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="section-title" style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem" }}>Sydney sector specialisation</h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {SECTORS.map((s, i) => (
                <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.75rem 2rem" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>{s.name}</h3>
                  <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKING IN SYDNEY */}
        <section className="section" style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="section-title" style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1.5rem" }}>Working in Sydney</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Engagements are led by Melbourne-based senior consultants with on-site presence in Sydney as needed. Remote-first delivery with monthly on-site workshops is the standard model.
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--text)", fontWeight: 600, margin: 0 }}>
              1300 921 280  ·  info@fidigital.com.au
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ padding: "90px 1.5rem", textAlign: "center" }}>
          <Link href="/book-discovery" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "var(--primary)", color: "#fff", padding: "1.1rem 2.5rem", borderRadius: "100px", fontSize: "1.1rem", fontWeight: 800, textDecoration: "none" }}>
            Book a Sydney Discovery Session <ArrowRight size={20} />
          </Link>
        </section>
      </main>
    </>
  );
}
