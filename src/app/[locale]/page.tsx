"use client";
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './home.module.scss';
import Paragraph from "../../components/Paragraph/Paragraph";
import { usePathname } from 'next/navigation';
import i18n from '../I18n/i18n';

const Home: React.FC = () => {
  const pathname = usePathname();


  const { t } = useTranslation('common');


  useEffect(() => {
    const locale = pathname.split('/')[1] || 'en';
     
    if (locale) {
      i18n.changeLanguage(locale.replace('/', ''));
    }
  }, [pathname]);

  return (
    <div className={styles.mainPageWrapper}>
      <Paragraph size="l" className={styles.greeting}>
        {t('welcome')}
      </Paragraph>
    </div>
  );
};

export default Home;
