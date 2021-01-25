import React, { useState } from "react";

import Hamburger from "./Hamburger";

import "./styles/style.scss";

const Nav: React.FC = () => {
  const [hambIsActive, setHambIsActive] = useState<boolean>(false);

  const toggleHamburgerMenu = () => {
    setHambIsActive((prevState: boolean) => !prevState);
  };
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li>item</li>
        </ul>
      </nav>
      <Hamburger isActive={hambIsActive} handleToggle={toggleHamburgerMenu} />
    </div>
  );
};

export default Nav;
