export default async function sitemap() {
    const baseUrl = "https://fidigital.com.au"; // Standardized to primary (non-www) domain
    const lastModified = new Date();

    // Real, indexable routes. New pages (e.g. /locations/*, /privacy, /terms) are
    // added here as they are built so the sitemap never lists non-existent URLs.
    const routes = [
        { path: "", priority: 1.0, changeFrequency: "weekly" },

        // Pillar: Product Engineering
        { path: "/product-engineering", priority: 0.9, changeFrequency: "weekly" },
        { path: "/product-engineering/web-applications", priority: 0.7, changeFrequency: "monthly" },
        { path: "/product-engineering/mobile-applications", priority: 0.7, changeFrequency: "monthly" },
        { path: "/product-engineering/saas-mvp", priority: 0.7, changeFrequency: "monthly" },
        { path: "/product-engineering/product-modernisation", priority: 0.7, changeFrequency: "monthly" },

        // Pillar: Data Platforms
        { path: "/data-platforms", priority: 0.9, changeFrequency: "weekly" },
        { path: "/data-platforms/databricks", priority: 0.8, changeFrequency: "monthly" },
        { path: "/data-platforms/snowflake", priority: 0.8, changeFrequency: "monthly" },
        { path: "/data-platforms/microsoft-fabric", priority: 0.8, changeFrequency: "monthly" },
        { path: "/data-platforms/business-intelligence", priority: 0.8, changeFrequency: "monthly" },

        // Pillar: AI Agents
        { path: "/ai-agents", priority: 0.9, changeFrequency: "weekly" },
        { path: "/ai-agents/rag-document-intelligence", priority: 0.8, changeFrequency: "monthly" },
        { path: "/ai-agents/copilots-digital-workers", priority: 0.8, changeFrequency: "monthly" },
        { path: "/ai-agents/workflow-automation", priority: 0.8, changeFrequency: "monthly" },

        // Pillar: Business Systems / Zoho
        { path: "/business-systems", priority: 0.9, changeFrequency: "weekly" },
        { path: "/zoho-consultants", priority: 0.8, changeFrequency: "monthly" },
        { path: "/zoho-partners-australia", priority: 0.8, changeFrequency: "monthly" },
        { path: "/crm-implementation", priority: 0.8, changeFrequency: "monthly" },
        { path: "/desk-implementation", priority: 0.7, changeFrequency: "monthly" },
        { path: "/creator", priority: 0.7, changeFrequency: "monthly" },
        { path: "/custom-development", priority: 0.7, changeFrequency: "monthly" },
        { path: "/3rd-party-zoho-integration", priority: 0.7, changeFrequency: "monthly" },

        // Industries
        { path: "/financial-services-wealth", priority: 0.8, changeFrequency: "monthly" },
        { path: "/healthcare-aged-care", priority: 0.8, changeFrequency: "monthly" },
        { path: "/resources-mining-logistics", priority: 0.8, changeFrequency: "monthly" },
        { path: "/energy-renewables", priority: 0.8, changeFrequency: "monthly" },
        { path: "/industries", priority: 0.7, changeFrequency: "monthly" },

        // Why FI Digital
        { path: "/why-fi-digital", priority: 0.8, changeFrequency: "monthly" },
        { path: "/why-fi-digital/global-delivery", priority: 0.6, changeFrequency: "monthly" },
        { path: "/why-fi-digital/partnerships", priority: 0.6, changeFrequency: "monthly" },
        { path: "/why-fi-digital/australian-compliance", priority: 0.6, changeFrequency: "monthly" },

        // Locations
        { path: "/locations/melbourne", priority: 0.7, changeFrequency: "monthly" },
        { path: "/locations/sydney", priority: 0.7, changeFrequency: "monthly" },

        // Conversion + proof
        { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
        { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
        { path: "/book-discovery", priority: 0.9, changeFrequency: "yearly" },

        // Resources
        { path: "/resources/zoho-modernisation-checklist", priority: 0.6, changeFrequency: "monthly" },

        // Legal
        { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
        { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    ];

    const entries = routes.map((r) => ({
        url: `${baseUrl}${r.path}`,
        lastModified,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
    }));

    // LLM discovery files (present in /public)
    entries.push(
        { url: `${baseUrl}/llms.txt`, lastModified, changeFrequency: "weekly", priority: 0.5 },
        { url: `${baseUrl}/llms-full.txt`, lastModified, changeFrequency: "weekly", priority: 0.5 },
    );

    return entries;
}
