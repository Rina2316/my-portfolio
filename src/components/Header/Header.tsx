import React from 'react';
import styles from './Header.module.scss'; 
import Htag from '../HTag/HTag';
import Cooperation from "../CooperationButtons/Cooperation";
import Image from 'next/image';
import photo from "../../app/icons/photo.jpg";
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
       <LanguageSwitcher />
      <Htag tag='h1' className={styles.headerh1}>Портфолио</Htag>
      <Htag tag="h2">Жарковой Екатерины</Htag>
      <div className={styles.headerCooperation}>
        <Cooperation iconType='telegram' socialLink='https://t.me/CReaVirtu'/>
        <Cooperation iconType='phone' socialLink='tel:+7(981)265-47-36'/>
        <Cooperation iconType='mail' socialLink='mailto:kate.jarkova@gmail.com'/>
      </div>
      
      <div className={styles.imageLines}>
        <div className={styles.imageWrapper}>
          <Image
            src={photo}
            alt="Фотография Жарковой Екатерины"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      </div>
      
    </header>
  );
};

export default Header;
