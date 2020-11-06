import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./Login.module.scss";
import { Button } from "@material-ui/core";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className={classes.login}>
      <div className={classes.overlay}>
        <div className={classes.container}>
          <h1 className="display-4">Welcome to github users search</h1>
          <Button
            variant="contained"
            color="primary"
            className={classes.loginBtn}
            onClick={loginWithRedirect}
          >
            login / sign up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
