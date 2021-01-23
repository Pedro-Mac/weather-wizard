import React from "react";

import "./style.scss";

interface buttonProps {
  icon: string;
}

const Button: React.FC<buttonProps> = ({ icon }) => {
  return (
    <button>
      <img src={icon} alt="" />
    </button>
  );
};

export default Button;
