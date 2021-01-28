import React, { useState } from "react";

import "./style.scss";

interface buttonAddProps {
  handleToggleSearch: () => void;
}

const ButtonAdd: React.FC<buttonAddProps> = ({ handleToggleSearch }) => {
  const [isActive, setisActive] = useState<boolean>(false);

  const handleClick = () => {
    handleToggleSearch();
    setisActive((prevState) => !prevState);
  };
  return (
    <button
      className={`button-add ${isActive && "search-is-active"}`}
      onClick={handleClick}
    >
      <div></div>
    </button>
  );
};

export default ButtonAdd;
