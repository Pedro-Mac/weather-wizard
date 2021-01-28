import React from "react";

import "./style.scss";

interface buttonProps {
  icon: string;
  alt: string;
  className: string;
}

const Button: React.FC<buttonProps> = ({ icon, alt, className }) => {
  return (
    <button className={`button-icon ${className}`}>
      <img className="icon" src={icon} alt={alt} />
    </button>
  );
};

export default Button;
