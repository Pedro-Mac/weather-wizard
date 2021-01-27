import React from "react";

import "./style.scss";

interface errorProps {
  reqError: string;
}

const Error: React.FC<errorProps> = ({ reqError }) => {
  return (
    <div className="error-container">
      <p className="error-text">{reqError}</p>
    </div>
  );
};

export default Error;
