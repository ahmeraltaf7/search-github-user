import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import classes from "./Followers.module.scss";

const Followers = () => {
  const { followers } = useContext(GithubContext);

  return (
    <div className={classes.follower}>
      {followers.map((follower, index) => {
        const { avatar_url: img, html_url, login } = follower;
        return (
          <article key={index}>
            <img src={img} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>{html_url}</a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Followers;
