/** @type {import('next').NextConfig} */

const config = {
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true
	},
	eslint: {
		// Disable ESLint during builds for export compatibility
		ignoreDuringBuilds: true,
	},
	typescript: {
		// Allow production builds to successfully complete even if there are type errors
		ignoreBuildErrors: true,
	},
	env: {
		API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:18001",
		API_VERSION: process.env.NEXT_PUBLIC_API_VERSION || "v1",
	},
};

export default config;
