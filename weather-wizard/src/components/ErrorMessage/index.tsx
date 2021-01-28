import React from "react";

import "./style.scss";

interface errorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<errorMessageProps> = ({ message }) => {
  return (
    <article className="error-container">
      <p>{message}</p>
    </article>
  );
};

export default ErrorMessage;
