import React, { useState, ChangeEvent } from "react";

const SearchBar = () => {
  const [userInput, setUserInput] = useState<string>("");

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserInput(value);
  };

  return (
    <form>
      <input type="text" value={userInput} onChange={handleUserInput} />
    </form>
  );
};

export default SearchBar;
