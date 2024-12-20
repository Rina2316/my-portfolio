
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";


export interface CooperationProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
	className?: string;
  socialLink: string; 
  iconType: "telegram" | "mail" | "phone";
  children?: React.ReactNode; 
}