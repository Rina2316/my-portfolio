// ScrollToTopButton.tsx
'use client';

import React, { useEffect, useState } from 'react';
import styles from './ScrollToTopButton.module.scss';
// Добавляем интерфейс для пропсов, если они понадобятся в будущем
export interface ScrollToTopButtonProps {
	className?: string; // Опциональный класс
 }
 
 const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ className }) => {
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
      <button className={`${styles.scrollToTop} ${className}`} onClick={scrollToTop}>
        ▲
      </button>
    )
  );
};

export default ScrollToTopButton;
