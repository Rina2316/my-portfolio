"use client";
// import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import styles from './home.module.scss';
import Paragraph from "../components/Paragraph/Paragraph";
import Htag from '../components/HTag/HTag';
import Technology from '../components/TehnologyLent/Texnology';
import Works from '../components/Works/Works';
import { projects } from '../components/Works/projects';
import Form from "../components/Form/Form";
import Menu from '../components/Menu/Menu';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';
import DownloadButton from '../components/DownloadButton/DownloadButton';

// import { usePathname } from 'next/navigation';
// import i18n from '../I18n/i18n';

const Home: React.FC = () => {
  //  const pathName=usePathname();
  //   const { t } = useTranslation('common');
  // useEffect(() => {
  //   console.log(pathName)
  // }, [pathName]);

  // Логика обрезания текста для проектов
  const modifiedProjects = projects.map((project) => {
    const maxLength = 100; // Максимальная длина текста, после которой обрезается
    const isLongText = project.description.length > maxLength;

    return {
      ...project,
      shortDescription: isLongText
        ? project.description.slice(0, maxLength) + "..."
        : project.description,
      isLongText, // добавляем флаг, чтобы использовать в компоненте Works
    };
  });

  return (
    <div className={styles.mainPageWrapper}>
      <Menu />
      <ScrollToTopButton />
      <Paragraph size="l" className={styles.greetingANDTechno}>
        Привет! Добро пожаловать на страницу с моим портфолио.
        Меня зовут Жаркова Екатерина, и я Frontend-разработчик. Мой путь как веб-разработчика
        начался с сотрудничества с замечательной грузинской компанией Ambition, а также с интересных проектов на фрилансе.
        Здесь ты можешь узнать о технологиях, с которыми я работаю, посмотреть проекты, которые я реализовала,
        и познакомиться с моим опытом работы наглядно.
      </Paragraph>

      <div className={styles.firstBlock} id="aboutMe">
        <div className={styles.aboutMe}>
          <Htag tag="h2">О себе</Htag>
          <Paragraph size="l">
            Я работаю с технологиями, которые помогают создавать современные,
            удобные и функциональные веб-приложения. Умею разрабатывать интерфейсы,
            которые сочетают эстетику и удобство, а также интегрировать их с backend-решениями.
            Постоянно учусь и стремлюсь совершенствовать свои навыки.
            В будущем планирую стать full-stack разработчиком, чтобы охватить полный цикл разработки.
          </Paragraph>
        </div>
        <div className={styles.workExperience}>
          <Htag tag="h2">Опыт работы</Htag>
          <Paragraph size="l">
            Моё последнее место работы — компания Ambition. На этой позиции я взяла на себя множество обязанностей, начиная от верстки до разработки и интеграции сложных систем.
          </Paragraph>
        </div>
      </div>

      <div className={styles.secondBlock}>
        <div className={styles.firstList}>
          <Htag tag="h3">Обязанности</Htag>
          <ul>
            <li>Верстка адаптивных и кроссбраузерных интерфейсов</li>
            <li>Интеграция frontend с backend API</li>
            <li>Разработка админки с использованием React Admin</li>
          </ul>
        </div>

        <div className={styles.secondList}>
          <Htag tag="h3">Достижения</Htag>
          <ul>
            <li>Разработка проекта с нуля до MVP</li>
            <li>Создание современного дизайна, адаптированного под пользователей</li>
            <li>Успешное развитие проекта и расширение его функционала</li>
          </ul>
        </div>
      </div>

      <DownloadButton className={styles.resumeButton} />

      <div id="projects">
        <Htag tag="h2" className={styles.tag}>Проекты</Htag>
        <Paragraph size="l" className={styles.tag}>
       Ниже представлены мои работы, с которыми вы можете ознакомится наглядно, нажав на иконку.
        </Paragraph>
        
        <Works projects={modifiedProjects} />
      </div>

      <div id="technologies">
        <Htag tag="h2" className={styles.tag}>Технологии</Htag>
        <Paragraph size="l" className={styles.greetingANDTechno}>
          Я работаю с такими технологиями, как React, Next.js, TypeScript, SCSS,
          а также использую инструменты для анимаций, такие как Framer Motion.
        </Paragraph>
        <Technology />
      </div>

      <div id="contact">
        <Htag tag="h3" className={styles.tag}>
          Для вашего удобства вы можете оставить сообщение через форму ниже, и я свяжусь с вами в ближайшее время...
        </Htag>
      </div>

      <Form />
    </div>
  );
};

export default Home;
