/**
 * Shared JSON-LD (schema.org) helpers.
 *
 * Single source of truth for structured data across the site. The canonical
 * host is non-www (matches metadataBase / canonicals / sitemap). The Organization
 * node lives once in src/app/layout.jsx and carries ORG_ID as its @id; every other
 * node (Service, LocalBusiness, etc.) references the organisation by { "@id": ORG_ID }
 * so the graph resolves instead of dangling.
 *
 * Usage (server or client component):
 *   import { JsonLd, buildBreadcrumb, buildService } from "@/lib/jsonLd";
 *   <JsonLd data={[buildBreadcrumb([...]), buildService({...})]} />
 */

export const SITE_URL = "https://fidigital.com.au";
export const ORG_ID = `${SITE_URL}/#organization`;

/**
 * Renders one or more JSON-LD objects as <script type="application/ld+json">.
 * `data` may be a single object or an array of objects.
 * Safe in both server and client components (no hooks, no "use client").
 */
export function JsonLd({ data }) {
  const items = Array.isArray(data) ? data.filter(Boolean) : [data];
  return (
    <>
      {items.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  );
}

/**
 * BreadcrumbList from an ordered trail.
 * @param {{name: string, path: string}[]} items - path is the absolute pathname, e.g. "/data-platforms".
 *   Pass "" or "/" for the Home crumb.
 */
export function buildBreadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/**
 * Service node, provided by the FI Digital organisation, served Australia-wide.
 * @param {{name: string, serviceType: string, path: string, description?: string}} opts
 */
export function buildService({ name, serviceType, path, description }) {
  const node = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", "name": "Australia" },
    url: `${SITE_URL}${path}`,
  };
  if (description) node.description = description;
  return node;
}

/**
 * FAQPage from question/answer pairs. The Q&A text MUST match the visible
 * on-page FAQ copy (Google structured-data requirement).
 * @param {{question: string, answer: string}[]} faqs
 */
export function buildFaqPage(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/**
 * Per-page Open Graph block (Task 12) — so pages stop inheriting the homepage
 * social card. Non-www host; shared brand image until per-page cards are supplied.
 * @param {{title: string, description: string, path: string}} opts
 */
export function buildOpenGraph({ title, description, path }) {
  return {
    title,
    description,
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    siteName: "FI Digital AU",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/four-pillars.png", width: 1024, height: 559, alt: "FI Digital — Software, Data & AI for Australian enterprise" }],
  };
}
