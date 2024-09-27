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
    setCurrentLocale(locale);
  }, [pathname]); // Эффект срабатывает при изменении пути

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = scrollTop / documentHeight;

      // Изменение прозрачности черного слоя
      const newOpacity = scrollRatio * 1; 
      document.documentElement.style.setProperty('--overlay-opacity', newOpacity.toString());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang={currentLocale} className={styles.wrapper}>
      <I18nProvider locale={currentLocale}>
      <body>
        
          <Header />
          <main>
            <Toaster />
            {children}
          </main>
          <Footer />
        
      </body></I18nProvider>
    </html>
  );
}
