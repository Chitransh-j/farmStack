/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"]
    },
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
    webpack(config) {
        config.resolve.fallback = {
            "mongodb-client-encryption": false ,
            "aws4": false
        },
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,

        };
        return config;
    },

};

export default nextConfig;