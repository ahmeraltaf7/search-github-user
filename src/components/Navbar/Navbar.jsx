import React from "react";
import classes from "./Navbar.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-primary mb-5">
      <a className="navbar-brand ml-5" href="#">
        GitHub Users Search
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {/* If isUser and User.picture is true than print image */}
          {isUser && user.picture && (
            <img className={classes.img} src={user.picture} alt={user.name} />
          )}
        </li>
        <li className="nav-item">
          {isUser && user.name && (
            <h5 className="mx-4 pt-2">
              Welcome, <strong>{user.name.toUpperCase()}</strong>
            </h5>
          )}
        </li>
        <li className="nav-item">
          {isUser && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
