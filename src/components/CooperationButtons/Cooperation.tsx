import styles from "./Cooperation.module.scss";
import cn from 'classnames';
import { CooperationProps } from "./Cooperation.props";
import Telegram from "../../app/public/icons/Telegram.svg?icon";
import Mail from "../../app/public/icons/Mail.svg?icon";
import Phone from "../../app/public/icons/Phone.svg?icon";
import { toast } from 'react-hot-toast';


const SocialMediaButton = ({
	className,
	socialLink,
	iconType,
	children,
 }: CooperationProps): JSX.Element => {


	const renderIcon = () => {
		switch (iconType) {
		  case "telegram":
			 return <Telegram />;
		  case "mail":
			 return <Mail />;
		  case "phone":
			 return <Phone />;
		  default:
			 return null;
		}
	 };
	
	 const handleClick = () => {
		// Проверяем, если это телефонный номер
		if (socialLink.startsWith('tel:')) {
		  const phoneNumber = socialLink.replace('tel:', '');
		  navigator.clipboard.writeText(phoneNumber) 
			 .then(() => {
				toast.success('Номер телефона скопирован в буфер обмена!');;
			 })
			 .catch(err => {
				console.error('Ошибка при копировании номера: ', err)
				toast.error('Ошибка при копировании номера!');
			 });
		} else {
		  // Открываем ссылку для других соцсетей
		  window.open(socialLink, '_blank');
		}
	 };
 
	return (
	  <button
		 className={cn(styles.button, className)}
		 onClick={handleClick}
	  >
		 {children}
		 {renderIcon()}
	  </button>
	);
 };
 
 export default SocialMediaButton;