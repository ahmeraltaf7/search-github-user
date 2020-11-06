import React from "react";
import Card from "../Card/Card";
import Followers from "../Followers/Followers";
const User = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>User</h4>
            <Card />
          </div>
          <div className="col-md-6">
            <h4>Followers</h4>
            <Followers />
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
