/** @type {import('next').NextConfig} */
// const nextConfig = {
// }

// module.exports = nextConfig

const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    reactStrictMode: true,
    assetPrefix: isProd ? '/restaurant/' : '',
};
