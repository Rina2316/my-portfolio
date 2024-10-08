import React from "react";
// import { useTranslation } from 'react-i18next';
import styles from "./DownloadButton.module.scss"
import { DownloadButtonProps } from "./DownloadButton.props";
import cn from 'classnames';
const DownloadButton=({
	className
 }: DownloadButtonProps): JSX.Element  => {
  const handleDownload = () => {
   
    const fileUrl = "/Recommendation_Letter_Ekaterina_Jarkova.pdf";
    
   
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Recommendation_Letter_Ekaterina_Jarkova.pdf";  
    link.click();
  };

  
  // const { t } = useTranslation('common');

  return (
    <button 	 className={cn(styles.button, className)} onClick={handleDownload}>
     Скачать рекомендательное письмо
    </button>
  );
};

export default DownloadButton;
