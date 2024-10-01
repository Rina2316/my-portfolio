import React from 'react';
import styles from "./Texnology.module.scss";
import Iconscss from "../../app/public/icons/scss.svg?icon";
import Iconcss from "../../app/public/icons/css.svg?icon";
import Iconjs from "../../app/public/icons/js.svg?icon";
import Iconnext from "../../app/public/icons/next.svg?icon";
import Iconreact from "../../app/public/icons/react.svg?icon";
import Iconts from "../../app/public/icons/ts.svg?icon";
import { TexnologyProps } from './Texnology.props';

const Technology= ({ className, ...props }: TexnologyProps)   => {
  return (
    <div className={styles.technologyWrapper}>
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
