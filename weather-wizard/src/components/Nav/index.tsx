import React, { useState } from "react";

import "./styles/style.scss";

const Nav = () => {
  const [hambIsActive, setHambIsActive] = useState<string>("");

  const toggleHamburgerMenu = () => {
    if (hambIsActive) {
      setHambIsActive("");
    } else {
      setHambIsActive("is-active");
    }
  };
  return (
    <nav>
      <button
        className={`hamburger hamburger--slider ${hambIsActive}`}
        type="button"
        onClick={toggleHamburgerMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  );
};

export default Nav;
