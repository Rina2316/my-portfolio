import React from "react";
import styles from "./GitButton.module.scss";
import { GitButtonProps } from  "./GitButton.props";

export const GitButton: React.FC<GitButtonProps> = ({ className, ...props }) => {
  const handleClick = () => {
    window.open("https://github.com/CReaVirtu", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className={`${styles.button} ${className || ""}`}
      onClick={handleClick}
      {...props}
    >
      GitHub Profile
    </button>
  );
};
