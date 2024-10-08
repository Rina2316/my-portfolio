"use client";
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './home.module.scss';
import Paragraph from "../../components/Paragraph/Paragraph";
import { usePathname } from 'next/navigation';
import i18n from '../I18n/i18n';
import Htag from "../../components/HTag/HTag";
import Technology from "../../components/TehnologyLent/Texnology";
import Works from '../../components/Works/Works';
import Form from "../../components/Form/Form";
import Menu from '../../components/Menu/Menu';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import DownloadButton from '../../components/DownloadButton/DownloadButton';

const Home: React.FC = () => {
  const pathname = usePathname();
  const { t } = useTranslation('common');

  useEffect(() => {
    const locale = pathname.split('/')[1] || 'en';
    if (locale) {
      i18n.changeLanguage(locale.replace('/', ''));
    }
  }, [pathname]);

  // Пример локализованных данных проектов
  const allProjects = t('allProjects', { returnObjects: true });

  type Project = {
    name: string;
    description: string; // Здесь указано, что description всегда строка
    link: string;
  };
  
  const modifiedProjects: Project[] = Object.values(allProjects).map((project: any) => {
    const maxLength = 100; // Максимальная длина текста
  
    // Используем значение по умолчанию для description, если оно не указано
    const description = project.description || "Описание отсутствует";
  
    const isLongText = description.length > maxLength;
  
    return {
      ...project,
      description, // Описание всегда будет строкой
      shortDescription: isLongText
        ? description.slice(0, maxLength) + "..."
        : description,
      isLongText,
    };
  });
  
  return (
    <div className={styles.mainPageWrapper}>
      <Menu />
      <ScrollToTopButton />
      <Paragraph size="l" className={styles.greetingANDTechno}>
        {t('welcome')}
      </Paragraph>

      <div className={styles.firstBlock} id="aboutMe">
        <div className={styles.aboutMe}>
          <Htag tag="h2">{t('aboutMeTag')}</Htag>
          <Paragraph size="l">{t('aboutMe')}</Paragraph>
        </div>
        <div className={styles.workExperience}>
          <Htag tag="h2">{t('workExperienceTag')}</Htag>
          <Paragraph size="l">{t('workExperience')}</Paragraph>
        </div>
      </div>

      <div className={styles.secondBlock}>
        <div className={styles.firstList}>
          <Htag tag="h3">{t('responsibilitiesTag')}</Htag>
          <ul>
            <li>{t('responsibilitiesLi1')}</li>
            <li>{t('responsibilitiesLi2')}</li>
            <li>{t('responsibilitiesLi3')}</li>
          </ul>
        </div>

        <div className={styles.secondList}>
          <Htag tag="h3">{t('achievementsTag')}</Htag>
          <ul>
            <li>{t('achievementsLi1')}</li>
            <li>{t('achievementsLi2')}</li>
            <li>{t('achievementsLi3')}</li>
          </ul>
        </div>
      </div>

      <DownloadButton className={styles.resumeButton}/>

      <div id="projects">
        <Htag tag="h2" className={styles.tag}>{t('projects')}</Htag>
        <Paragraph size="l" className={styles.tag}>{t('projectsDescription')}</Paragraph>
        <Works projects={modifiedProjects} />
      </div>

      <div id="technologies">
        <Htag tag="h2" className={styles.tag}>{t('technologies')}</Htag>
        <Paragraph size="l" className={styles.greetingANDTechno}>
          {t('technologiesDescription')}
        </Paragraph>
        <Technology />
      </div>

      <div id="contact">
        <Htag tag="h3" className={styles.tag}>{t('formIntro')}</Htag>
      </div>

      <Form />
    </div>
  );
};

export default Home;
