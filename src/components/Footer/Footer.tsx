
import React from 'react';
import styles from './Footer.module.scss'; 
import Paragraph from '../Paragraph/Paragraph';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
		<Paragraph size='s'>

		© {new Date().getFullYear()} - Все права защищены 
		</Paragraph>
    </footer>
  );
};

export default Footer;
