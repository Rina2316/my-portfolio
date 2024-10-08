import React, { useState } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import Htag from '../HTag/HTag';
import WorksIcon from "../../app/public/icons/works.svg?icon";
import styles from "./Works.module.scss";
import { useTranslation } from 'react-i18next';

interface Project {
  name: string;
  description: string;
  link: string;
}

interface WorksProps {
  projects: Project[];
}

const Works: React.FC<WorksProps> = ({ projects }) => {
  
  // Состояние для контроля раскрытия описаний проектов
  const [expandedProjects, setExpandedProjects] = useState<boolean[]>(Array(projects.length).fill(false));
  const { t } = useTranslation('common');
  // Функция для переключения состояния раскрытия текста
  const toggleDescription = (index: number) => {
    const updatedExpandedProjects = [...expandedProjects];
    updatedExpandedProjects[index] = !updatedExpandedProjects[index];
    setExpandedProjects(updatedExpandedProjects);
  };

  const getGridPosition = (index: number) => {
    const row = index + 1;
    const column = (index % 2) + 1;

    return { row, column };
  };

  return (
    <div className={styles.mainWrapper}>
      {projects.map((project, index) => {
        const { row, column } = getGridPosition(index);

        return (
          <div
            key={project.name}
            className={styles.cardWrapper}
            style={{ gridRow: row, gridColumn: column }}
          >
            <Htag
              tag="h3"
              className={styles.title}
              onClick={() => toggleDescription(index)} // Раскрытие по клику на название
            >
              {project.name}
            </Htag>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <WorksIcon className={styles.icon} />
            </a>
            <Paragraph
              className={styles.info}
              size="m"
              onClick={() => toggleDescription(index)} // Раскрытие по клику на описание
            >
              {expandedProjects[index]
                ? project.description
                : project.description.slice(0, 100) + '...'}
            </Paragraph>
            {/* Кнопка "Читать дальше" или три точки */}
            {!expandedProjects[index] ? (
              <span
                className={styles.readMore}
                onClick={() => toggleDescription(index)}
              >
                {t('readMore')}
              </span>
            ) : (
              <span
                className={styles.dots}
                onClick={() => toggleDescription(index)}
              >
                 {t('readMore2')}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Works;
