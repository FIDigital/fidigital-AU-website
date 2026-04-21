export const siteConfig = {
    name: "FI Digital Australia",
    tagline: "Product Engineering, Data Platforms & AI Agent Architects",
    url: "https://www.fidigital.com.au",
    email: "info@fidigital.com.au",
    phone: "1300 921 280",
    whatsapp: "1300 921 280",
    offices: {
        melbourne_hq: {
            city: "Melbourne HQ",
            address: "Level 9, 440 Collins Street, Melbourne VIC 3000",
            phone: "1300 921 280",
        },
        vermont_south: {
            city: "Vermont South Office",
            address: "3 Tanunda Street, Vermont South, Victoria 3133",
            phone: "1300 921 280",
        },
    },
};

export const navigation = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Product Engineering",
        href: "/product-engineering",
        children: [
            { label: "Web Applications", href: "/product-engineering/web-applications" },
            { label: "Mobile Applications", href: "/product-engineering/mobile-applications" },
            { label: "SaaS & MVP Builds", href: "/product-engineering/saas-mvp" },
            { label: "Product Modernisation", href: "/product-engineering/product-modernisation" },
        ],
    },
    {
        label: "Data Platforms",
        href: "/data-platforms",
        children: [
            { label: "Databricks Consulting", href: "/data-platforms/databricks" },
            { label: "Microsoft Fabric", href: "/data-platforms/microsoft-fabric" },
            { label: "Snowflake Consulting", href: "/data-platforms/snowflake" },
            { label: "Business Intelligence", href: "/data-platforms/business-intelligence" },
        ],
    },
    {
        label: "AI Agents",
        href: "/ai-agents",
        children: [
            { label: "RAG & Document Intelligence", href: "/ai-agents/rag-document-intelligence" },
            { label: "Copilots & Digital Workers", href: "/ai-agents/copilots-digital-workers" },
            { label: "Workflow Automation", href: "/ai-agents/workflow-automation" },
        ],
    },
    {
        label: "About",
        href: "/why-fi-digital",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export const stats = [
    { value: "150+", label: "Enterprise Projects" },
    { value: "100%", label: "Local AU Delivery" },
    { value: "24/7", label: "Global Support" },
    { value: "80+", label: "Certified Engineers" },
];

export const industries = [
    {
        name: "Financial Services & Wealth",
        slug: "financial-services-wealth",
        tagline: "Digital Transformation for Modern Finance",
        iconId: "building",
        description: "Enterprise-grade data platforms and AI agents for wealth management and banking.",
    },
    {
        name: "Healthcare & Aged Care",
        slug: "healthcare-aged-care",
        tagline: "Technology for Better Care Outcomes",
        iconId: "heart",
        description: "Streamline patient management and reporting with custom healthcare software.",
    },
    {
        name: "Resources & Logistics",
        slug: "resources-mining-logistics",
        tagline: "Efficiency at Scale",
        iconId: "truck",
        description: "Optimise mining operations and supply chain logistics with real-time data.",
    },
    {
        name: "Energy & Renewables",
        slug: "energy-renewables",
        tagline: "Sustainable Technology Systems",
        iconId: "zap",
        description: "Software solutions for solar, wind, and green energy distribution.",
    },
];
