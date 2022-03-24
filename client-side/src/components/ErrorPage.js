import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h3>PAGE NOT FOUND</h3>
      <Link to="/">Go To Home</Link>
    </div>
  );
};

export default ErrorPage;
