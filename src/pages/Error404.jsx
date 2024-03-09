import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container text-center my-4">
      <h1>Oops! Page Not Found</h1>
      <p>
        We're sorry, but the page you are looking for might have been removed,
        had its name changed, or is temporarily unavailable.
      </p>
      <p>Error 404</p>
      <Link to="/" className="btn btn-primary">
        &larr; Go Back to Home
      </Link>
    </div>
  );
};

export default Error404;
