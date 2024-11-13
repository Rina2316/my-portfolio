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
      Приветствую!
Меня зовут Жаркова Екатерина, я целеустремлённый фронтенд-разработчик, ориентированный на постоянное развитие и рост в профессии. Мне интересны как технические аспекты задач, так и их влияние на бизнес-процессы. Интересуюсь не только программированием, но и UX/UI дизайном, маркетингом, а также оптимизацией бизнес-процессов.

На странице портфолио ты можешь узнать о технологиях, с которыми я работаю, посмотреть проекты, которые я реализовала, и познакомиться с моим опытом работы наглядно.
      </Paragraph>

      <div className={styles.firstBlock} id="aboutMe">
        <div className={styles.aboutMe}>
          <Htag tag="h2">О себе</Htag>
          <Paragraph size="l">
          С удовольствием беру на себя инициативу в сложных проектах и ответственно подхожу к задачам. У меня развитые лидерские качества, но я также легко адаптируюсь в командной работе и готова к сотрудничеству. 
          Ценю чёткие цели, сроки и планы, и всегда стремлюсь к достижению значимых результатов.
          </Paragraph>
        </div>
        <div className={styles.workExperience}>
          <Htag tag="h2">Опыт работы</Htag>
          <Paragraph size="l">
Свой путь я начала в Ambition Group — грузинской продуктовой компании. Кроме того, я занималась фриланс-проектами и написала множество пет-проектов.
          </Paragraph>
        </div>
      </div>

      <div className={styles.secondBlock}>
        <div className={styles.firstList}>
          <Htag tag="h3">Обязанности</Htag>
          <ul>
            <li> Разработка фронтенда сайта на Next.js и SCSS, адаптивная верстка</li>
            <li> Интеграция REST API</li>
            <li> Разработка админки средствами react-admin</li>
            <li> Участье в проектировании UI/UX дизайна </li>
            <li> Работа с анимацией (Framer Motion) </li>
            <li> Проектирование архтиектуры фронтенда</li>
            <li> Разработка и внедрение локализации на двух языках посредством i18n</li>
            <li> Оптимизация интерфейса и внедрение нового функционала</li>
            <li> Написание базовых юнит- и компонентных тестов для ключевых интерфейсных элементов c использованием таких инструментов, как React Testing Library и Jest</li>
            <li> Тестирование кросс-браузерной и кросс-платформенной совместимости, а также адаптивности продукта для разных устройств и экранов</li>
            <li> Коммуникация в кросс-функциональной комманде проекта (backend-разработчик, дизайнер, маркетолог) </li>
            <li> Поддержка и развиеие продукта  </li>
          </ul>
        </div>

        <div className={styles.secondList}>
          <Htag tag="h3">Достижения</Htag>
          <ul>
            <li>Разработка проекта с нуля до MVP</li>
            <li>Вывод продукта на грузинский рынок</li>
            <li>Реализация кастомного провайдера для react-admin</li>
            <li>Улучшение пользовательского опыта </li>
            <li>Разработка кросс-браузерной и кросс-платформенной версии сайта</li>
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
        <Paragraph size="l" className={styles.greetingANDTechno}>В основном я работаю с такими технологиями, как React/Next.js, ES6 JavaScript, TypeScript, SCSS, Redux и Node.js, а также использую такие инструменты как: Redux, React-admin, React Testing Library, i18n, Framer Motion, Yup, Formik и другие. Однако помимо этого, я имела опыт работы с Vue.JS, Zustand, MobX, Node.JS, Express.JS и PostgreSQL, а также постоянно изучаю новые технологии.
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
