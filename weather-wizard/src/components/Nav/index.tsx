import React, { useState } from "react";

import "./styles/style.scss";

const Nav = () => {
  const [hambIsActive, setHambIsActive] = useState<boolean>(false);

  const toggleHamburgerMenu = () => {
    setHambIsActive((prevState: boolean) => !prevState);
  };
  return (
    <nav>
      <button
        className={`hamburger hamburger--slider ${
          hambIsActive && "is-active"
        } `}
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
