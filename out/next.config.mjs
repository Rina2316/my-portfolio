/** @type {import('next').NextConfig} */

	const nextConfig = {
		output: 'export',  // Для статического экспорта
		basePath: '/my-portfolio',  // Указываем базовый путь, совпадающий с названием репозитория
		assetPrefix: '/my-portfolio/',  // Указываем префикс для статических файлов
		trailingSlash: true,  // Добавляем слэш в конце путей для совместимости с GitHub Pages
		images: {
			unoptimized: true,  // Отключаем оптимизацию изображений (нужно для GitHub Pages)
		},
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
 