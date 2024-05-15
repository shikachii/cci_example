/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: '/cci_example',
  reactStrictMode: true,
	output: "export",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
