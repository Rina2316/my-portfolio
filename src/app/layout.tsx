'use client';
import React, { useEffect, useState } from 'react';
import styles from './layout.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { I18nProvider } from './I18n/I18nProvider'; 
import { usePathname } from 'next/navigation'; // Импортируем хук для получения пути

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Получаем текущий путь
  const [currentLocale, setCurrentLocale] = useState<string>('en');

  useEffect(() => {
    const locale = pathname.split('/')[1] || 'en'; 
    setCurrentLocale(locale?.replace('/', ''));    
  }, [pathname]); // Эффект срабатывает при изменении пути

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = scrollTop / documentHeight;

      // Изменение прозрачности черного слоя
      const newOpacity = scrollRatio * 0.8; 
      document.documentElement.style.setProperty('--overlay-opacity', newOpacity.toString());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <html
     lang={currentLocale} 
     className={styles.wrapper}>
      <I18nProvider locale={currentLocale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Frontend-разработчик с опытом в React, Next.js, TypeScript и адаптивной верстке. Создаю современные, быстрые и удобные веб-приложения с акцентом на UI/UX." />
        <meta name="keywords" content="frontend разработчик, React, TypeScript, Next.js, SCSS, CSS, веб-разработка, UI/UX дизайн, SPA (Single Page Applications)" />
        <meta name="author" content="Жаркова Екатерина" />
        <title>Мое портфолио</title>
        <link rel="icon" href="/favicon.ico"/> 
        <meta property="og:title" content="Мое портфолио" />
        <meta property="og:description" content="Frontend-разработчик с опытом в React, Next.js, TypeScript и адаптивной верстке." />
        <meta property="og:image" content="https://example.com/path/to/your/image.jpg" /> {/* Укажите путь к изображению */}
        <meta property="og:url" content="https://example.com" /> {/* Укажите URL вашей страницы */}
        <meta property="og:type" content="website" />
      </head>
      <body> 
     
          <Header />
          <main>
            <Toaster />
            {children}
          </main>
          <Footer />
        
      </body>
      </I18nProvider>
    </html>
  );
}
