// ScrollToTopButton.tsx
'use client';

import React, { useEffect, useState } from 'react';
import styles from './scrollToTopButton.module.scss';
import { ScrollToTopButtonProps } from './ScrollToTopButton.props';

const ScrollToTopButton=({ className, ...props }: ScrollToTopButtonProps)   =>{
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
	const handleScroll = () => {
	  const scrollThreshold = window.innerWidth < 768 ? 600 : 1300; // Снижаем порог для мобильных устройств
	  if (window.scrollY > scrollThreshold) {
		 setVisible(true);
	  } else {
		 setVisible(false);
	  }
	};
 
	window.addEventListener('scroll', handleScroll);
	return () => {
	  window.removeEventListener('scroll', handleScroll);
	};
 }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button className={styles.scrollToTop} onClick={scrollToTop}>
        ▲
      </button>
    )
  );
};

export default ScrollToTopButton;
