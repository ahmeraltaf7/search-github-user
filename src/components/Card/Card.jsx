import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import classes from "./Card.module.scss";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const Card = () => {
  const {
    githubUsers: {
      avatar_url,
      html_url,
      name,
      company,
      blog,
      bio,
      location,
      twitter_username,
    },
  } = useContext(GithubContext);

  return (
    <div className={classes.card}>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness /> {company}
        </p>
        <p>
          <MdLocationOn /> {location || "earth"}
        </p>
        <a href={`http://${blog}`}>
          <MdLink />
          {blog}
        </a>
      </div>
    </div>
  );
};

export default Card;
