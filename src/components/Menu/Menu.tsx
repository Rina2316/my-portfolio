// Menu.tsx
'use client';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import styles from './Menu.module.scss';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Закрываем меню после перехода
    }
  };

  const { t } = useTranslation('common');

  return (
    <div className={styles.menu}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰ 
      </button>
      {isOpen && (
        <div className={styles.menuPopup}>
          <ul>
            <li  className ={styles.li} onClick={() => scrollToSection('aboutMe')}>{t('menu1')}</li>
            <li className ={styles.li} onClick={() => scrollToSection('projects')}>{t('menu2')}</li>
            <li  className ={styles.li} onClick={() => scrollToSection('technologies')}>{t('menu3')}</li>
            <li className ={styles.li} onClick={() => scrollToSection('contact')}>{t('menu4')}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
