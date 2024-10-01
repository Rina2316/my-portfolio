
import React from 'react';
import styles from './Footer.module.scss'; 
import Paragraph from '../Paragraph/Paragraph';
import Image from 'next/image';
import ornament from "../../app/public/icons/ornamentjpg.jpg";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>

<div className={styles.ornamentWrapper}>
        <Image
          src={ornament}
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.imageOrnament}
        />
      </div>
		<Paragraph size='l' className={styles.date}>

		©{new Date().getFullYear()} 
		</Paragraph>
    </footer>
  );
};

export default Footer;
