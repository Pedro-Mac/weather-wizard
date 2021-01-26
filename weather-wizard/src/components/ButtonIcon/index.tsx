import React from "react";

import "./style.scss";

interface buttonProps {
  icon: string;
  alt: string;
}

const Button: React.FC<buttonProps> = ({ icon, alt }) => {
  return (
    <button className="button-icon">
      <img className="icon" src={icon} alt={alt} />
    </button>
  );
};

export default Button;
