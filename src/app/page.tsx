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
import { GitButton } from "../components/GitButton/GitButton";
// import { usePathname } from 'next/navigation';
// import i18n from '../I18n/i18n';

const Home: React.FC = () => {
  //  const pathName=usePathname();
  //   const { t } = useTranslation('common');
  // useEffect(() => {
  //   console.log(pathName)
  // }, [pathName]);

  const modifiedProjects = projects.map((project) => {
    const maxLength = 100; 
    const isLongText = project.description.length > maxLength;

    return {
      ...project,
      shortDescription: isLongText
        ? project.description.slice(0, maxLength) + "..."
        : project.description,
      isLongText,
    };
  });

  return (
    <div className={styles.mainPageWrapper}>
      <Menu />
      <ScrollToTopButton />
      <Paragraph size="l" className={styles.greetingANDTechno}>
      Приветствую!
Меня зовут Жаркова Екатерина, я фронтенд-разработчик.

На странице портфолио ты можешь узнать о технологиях, с которыми я работаю, посмотреть проекты, которые я реализовала, и познакомиться с моим опытом работы наглядно.
      </Paragraph>

      <div className={styles.firstBlock} id="aboutMe">
        <div className={styles.aboutMe}>
          <Htag tag="h2">О себе</Htag>
          <Paragraph size="l">
          Постоянно интересуюсь новыми тенденциями в программировании, изучаю современные технологии и стремлюсь охватить полный процесс разработки, поэтому активно изучаю backend. Имею опыт работы с различными технологиями. Готова брать на себя ответственность и проявлять инициативу.
При решении задач мне интересны не только технические аспекты, но и то, как они влияют на бизнес в целом.
Эффективно работаю в команде, делюсь опытом и помогаю коллегам справляться со сложными задачами.
Открыта к общению и убеждена, что для достижения результата всегда можно найти компромисс и договориться. Кроме разработки, меня привлекают маркетинг и бизнес. Имею большие амбиции и желание развиваться в этих направлениях, чтобы не только создавать, но и понимать, как продукты влияют на пользователей и бизнес-результаты.

          </Paragraph>
        </div>
        <div className={styles.workExperience}>
          <Htag tag="h2">Опыт работы</Htag>
          <Paragraph size="l">
          Свою профессиональную карьеру я начала в Ambition Group — грузинской продуктовой компании, где занималась разработкой продукта с нуля до стадии MVP и активно способствовала его выходу на грузинский рынок. Помимо этого, у меня есть опыт во фрилансе, а также создание и реализация множества личных проектов.         </Paragraph>
        </div>
      </div>

      <div className={styles.secondBlock}>
        <div className={styles.firstList}>
          <Htag tag="h3">Обязанности</Htag>
<ul>
  <li>Разработка фронтенд части на Next.js и SCSS, адаптивная верстка</li>
  <li>Интеграция REST API</li>
  <li>Разработка кастомных компонентов с возможностью лёгкой адаптации, изменения стилей и переиспользования</li>
  <li>Участие в проектировании UI/UX дизайна</li>
  <li>Работа с анимацией (Framer Motion)</li>
  <li>Разработка и внедрение локализации на двух языках посредством i18n</li>
  <li>Проектирование архитектуры фронтенда</li>
  <li>Разработка админки средствами react-admin</li>
  <li>Оптимизация интерфейса и внедрение нового функционала</li>
  <li>Написание базовых юнит- и компонентных тестов для ключевых интерфейсных элементов с использованием таких инструментов, как React Testing Library и Jest</li>
  <li>Тестирование кросс-браузерной и кросс-платформенной совместимости, а также адаптивности продукта для разных устройств и экранов</li>
  <li>Коммуникация в кросс-функциональной команде проекта (backend-разработчик, тестировщик, дизайнер, маркетолог, project manager)</li>
  <li>Peer Review</li>
  <li>Поддержка и развитие продукта</li>
</ul>
        </div>

        <div className={styles.secondList}>
          <Htag tag="h3">Достижения</Htag>
          <ul>
  <li>Разработка проекта с 0 до MVP</li>
  <li>Повышение гибкости и масштабируемости проекта</li>
  <li>Обеспечение стабильности и корректности работы платформы</li>
  <li>Оптимизация процессов разработки, посредством внедрения структурированных подходов и принципов DRY и SOLID</li>
  <li>Разработка кросс-браузерной и кросс-платформенной версии сайта</li>
  <li>Улучшение пользовательского опыта</li>
  <li>Локализация на английский и грузинский языки при помощи i18n</li>
  <li>Реализация кастомного провайдера для react-admin</li>
</ul>

        </div>
      </div>

      <DownloadButton className={styles.resumeButton} />

      <div id="projects">
        <Htag tag="h2" className={styles.tag}>Проекты</Htag>
        <Paragraph size="l" className={styles.tag}>
       Ниже представлены мои работы, с которыми вы можете ознакомится наглядно, нажав на иконку или перейдя в мой Git.
        </Paragraph>
        <GitButton className={styles.git}/>
        
        <Works projects={modifiedProjects} />
      </div>

      <div id="technologies">
        <Htag tag="h2" className={styles.tag}>Технологии</Htag>
        <Paragraph size="l" className={styles.greetingANDTechno}>
          <ul>
            <li> <span>Frontend:</span> TypeScript, React.js, Next.js, ReactAdmin, Redux, i18n, Yup, Formik, Framer Motion, Axios, SVGR:next-svgr, React-hot-toast
            </li>
            <li><span> Backend: </span>
            TypeScript, Node.js</li>
            <li><span>БД: </span>
              PostgreSQL</li>
            <li><span>DevOps: </span>
  Ngnix, Docker</li>
          </ul>
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
