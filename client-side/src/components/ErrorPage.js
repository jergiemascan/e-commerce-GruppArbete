import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h1>Error 404</h1>
      <h3>PAGE NOT FOUND</h3>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;
