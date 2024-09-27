"use client";
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './home.module.scss';
import Paragraph from "../../components/Paragraph/Paragraph";
import { usePathname } from 'next/navigation';
import i18n from '../I18n/i18n';

const Home: React.FC = () => {
 const pathName=usePathname();


  const { t } = useTranslation('common');


  useEffect(() => {
    // const language = Array.isArray(locale) ? locale[0] : locale; // Берем первый элемент, если это массив
    // if (language) {
    //   i18n.changeLanguage(language);
    // }
    console.log(pathName)
  }, [pathName]);

  return (
    <div className={styles.mainPageWrapper}>
      <Paragraph size="l" className={styles.greeting}>
        {t('welcome')}
        fffffffff
      </Paragraph>
    </div>
  );
};

export default Home;
