import React, { useState, ChangeEvent } from "react";

import ButtonIcon from "../../components/ButtonIcon";

import searchIcon from "../../images/svg/search.svg";
import arrowIcon from "../../images/svg/arrow.svg";

import "./style.scss";

const SearchBar = () => {
  const [userInput, setUserInput] = useState<string>("");

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserInput(value);
  };

  return (
    <form className="searchbar-form">
      <img className="search-icon" src={searchIcon} alt="lupe" />
      <input
        className="searchbar-input"
        type="text"
        value={userInput}
        onChange={handleUserInput}
        placeholder="Search another city"
      />
      <ButtonIcon icon={arrowIcon} alt="arrow" />
    </form>
  );
};

export default SearchBar;
