import React from "react";

import "./App.scss";

const App: React.FC = () => {
  console.log(process.env.REACT_APP_TEST);
  return <div className="App">hello world</div>;
};

export default App;
