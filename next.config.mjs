/** @type {import('next').NextConfig} */

const nextConfig = {
	
	i18n: {
		locales: ['en', 'ru'], // Поддерживаемые языки
		defaultLocale: 'en',   // Язык по умолчанию — английский
		localeDetection: false, // Отключаем автоматическое определение языка
	 }
	 ,
	 async redirects() {
		return [
		  {
			 source: '/',               // Если маршрут корневой
			 destination: '/ru',        // Редирект на английскую версию
			 permanent: true,           // Постоянный редирект
		  },
		];
	 }
	 ,
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
 