import React, { useState } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import Htag from '../HTag/HTag';
import WorksIcon from "../../app/public/icons/works.svg?icon";
import styles from "./Works.module.scss";

interface Project {
  name: string;
  description: string;
  link?: string; // Сделаем ссылку необязательной
}

interface WorksProps {
  projects: Project[];
}

const Works: React.FC<WorksProps> = ({ projects }) => {
  const [expandedProjects, setExpandedProjects] = useState<boolean[]>(Array(projects.length).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleIconClick = (link?: string) => {
    if (!link) {
      setIsModalOpen(true);
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
              onClick={() => toggleDescription(index)}
            >
              {project.name}
            </Htag>
            <div onClick={() => handleIconClick(project.link)}>
              <WorksIcon className={styles.icon} />
            </div>
            <Paragraph
              className={styles.info}
              size="m"
              onClick={() => toggleDescription(index)}
            >
              {expandedProjects[index]
                ? project.description
                : project.description.slice(0, 100) + '...'}
            </Paragraph>
            {!expandedProjects[index] ? (
              <span
                className={styles.readMore}
                onClick={() => toggleDescription(index)}
              >
                Читать дальше
              </span>
            ) : (
              <span
                className={styles.dots}
                onClick={() => toggleDescription(index)}
              >
                Обратно
              </span>
            )}
          </div>
        );
      })}

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent}>
            <Htag tag='h3' className={styles.tag}>На сайте ведутся работы</Htag>
            <Paragraph size='s'>Приносим свои извинения. Пожалуйста, проверьте изменения в ближайшее время.</Paragraph>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
