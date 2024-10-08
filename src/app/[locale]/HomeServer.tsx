// src/app/[locale]/HomeServer.tsx

export async function generateStaticParams() {
	return [
	  { locale: 'en' },
	  { locale: 'ru' },
	  // Добавьте другие локали по мере необходимости
	];
 }
 
 const HomeServer = () => {
	return (
	  <div>
		 {/* Ваш серверный контент, если это необходимо */}
	  </div>
	);
 };
 
 export default HomeServer;
 