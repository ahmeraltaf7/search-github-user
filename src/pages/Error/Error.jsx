import React from "react";
import classes from "./Error.module.scss";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className={classes.error}>
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to="/" className="btn">
        {" "}
        back home
      </Link>
    </div>
  );
};
export default Error;
