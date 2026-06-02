/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    images: {
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
        ];
    },
};

export default nextConfig;
