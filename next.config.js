/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'uxwing.com',
            },
            {
                protocol: 'https',
                hostname: 'deepchecks.com',
            },
            {
                protocol: 'https',
                hostname: 'n8n.io',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/industries/financial-services-wealth',
                destination: '/financial-services-wealth',
                statusCode: 301,
            },
            {
                source: '/zoho-implementation-specialist',
                destination: '/crm-implementation',
                statusCode: 301,
            },
            {
                source: '/contact-us',
                destination: '/contact',
                statusCode: 301,
            },
            {
                source: '/crm/zoho',
                destination: '/zoho-consultants',
                statusCode: 301,
            },
            {
                source: '/financial-services',
                destination: '/financial-services-wealth',
                statusCode: 301,
            },
        ];
    },
};

export default nextConfig;
