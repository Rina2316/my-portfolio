/** @type {import('next').NextConfig} */

const nextConfig = {
	
	webpack(config) {
	  const fileLoaderRule = config.module.rules.find((rule) =>
		 rule.test?.test?.('.svg'),
	  );
 
	  config.module.rules.push(
		 {
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			resourceQuery: /icon/, // *.svg?icon
			use: ['@svgr/webpack'],
		 },
		 {
			...fileLoaderRule,
			test: /\.svg$/i,
			resourceQuery: { not: /icon/ }, 
		 },
	  );
 
	  fileLoaderRule.exclude = /\.svg$/i;
 
	  return config;
	},
 };
 
 export default nextConfig;
 