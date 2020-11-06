import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../../images/preloader.gif";
import classes from "./AuthWrapper.module.scss";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <img src={loadingGif} alt="spinner" className={classes.img} />;
  }
  if (error) {
    return <h1 className={classes.text}>{error.message}</h1>;
  }
  return <> {children}</>;
}

export default AuthWrapper;
