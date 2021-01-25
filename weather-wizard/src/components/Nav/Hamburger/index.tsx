import React from "react";

import { hamburgerProps } from "./propsType";

import "./style.scss";

const Hamburger: React.FC<hamburgerProps> = ({ isActive, handleToggle }) => {
  return (
    <button
      className={`hamburger hamburger--slider ${isActive && "is-active"} `}
      type="button"
      onClick={handleToggle}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
