import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import classes from "./Info.module.scss";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import InfoDisplay from "./InfoDisplay";
import cx from "classnames";

const UserInfo = () => {
  const {
    githubUsers: { public_repos, followers, following, public_gists },
  } = useContext(GithubContext);

  const items = [
    {
      id: 1,
      icon: <GoRepo className={cx(classes.icon, classes.pink)} />,
      label: "repos",
      value: public_repos,
    },
    {
      id: 2,
      icon: <FiUsers className={cx(classes.icon, classes.green)} />,
      label: "followers",
      value: followers,
    },
    {
      id: 3,
      icon: <FiUserPlus className={cx(classes.icon, classes.purple)} />,
      label: "following",
      value: following,
    },
    {
      id: 4,
      icon: <GoGist className={cx(classes.icon, classes.yellow)} />,
      label: "gists",
      value: public_gists,
    },
  ];
  return (
    <section className="my-5 text-center text-capitalize">
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <InfoDisplay key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
