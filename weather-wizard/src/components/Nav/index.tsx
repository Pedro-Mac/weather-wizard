import React, { useState } from "react";

import Hamburger from "./Hamburger";
import CitiesList from "./CitiesList";

import "./style.scss";

const Nav: React.FC = () => {
  const [hambIsActive, setHambIsActive] = useState<boolean>(false);

  const toggleHamburgerMenu = () => {
    setHambIsActive((prevState: boolean) => !prevState);
  };

  const closeMenu = () => {
    setHambIsActive(false);
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <Hamburger
            isActive={hambIsActive}
            handleToggle={toggleHamburgerMenu}
          />
        </nav>
      </div>
      <CitiesList isActive={hambIsActive} closeNav={closeMenu} />
    </>
  );
};

export default Nav;
