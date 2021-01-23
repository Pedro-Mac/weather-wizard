import React from "react";

import "./style.scss";

interface buttonProps {
  icon: string;
  alt: string;
}

const Button: React.FC<buttonProps> = ({ icon, alt }) => {
  return (
    <button>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default Button;
