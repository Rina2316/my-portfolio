
import React from 'react';
import styles from "./Texnology.module.scss";
import Iconscss from "../../app/public/icons/scss.svg?icon";
import Iconcss from "../../app/public/icons/css.svg?icon";
import Iconjs from "../../app/public/icons/js.svg?icon";
import Iconnext from "../../app/public/icons/next.svg?icon";
import Iconreact from "../../app/public/icons/react.svg?icon";
import Iconts from "../../app/public/icons/ts.svg?icon";

// Добавляем интерфейс для пропсов, если они будут использоваться в будущем
export interface TechnologyProps {
  className?: string; // Опциональный параметр для добавления классов
}

const Technology: React.FC<TechnologyProps> = ({ className }) => {
  return (
    <div className={`${styles.technologyWrapper} ${className}`}>
      <div className={styles.scrollContainer}>
        <div className={styles.iconTrack}>
          <Iconjs />
          <Iconcss />
          <Iconnext />
          <Iconscss />
          <Iconts />
          <Iconreact />
          <Iconjs />
          <Iconcss />
          <Iconnext />
          <Iconscss />
          <Iconts />
          <Iconreact />
        </div>
      </div>
    </div>
  );
};

export default Technology;
