import React, { useContext, useState } from "react";
import classes from "./Search.module.scss";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../../context/context";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";

const Search = () => {
  const [user, setUser] = useState("");
  const { request, error, searchGithubUser, loading } = useContext(
    GithubContext
  );
  const submitHandler = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };
  return (
    <div className="container">
      <div className="row">
        {error.show && (
          <div className="alert alert-danger" role="alert">
            {error.msg}
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-md-9">
          <form onSubmit={submitHandler}>
            <FormControl className={classes.root}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Search Github User
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <MdSearch />
                  </InputAdornment>
                }
                value={user}
                onChange={(e) => setUser(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
              />
            </FormControl>

            <Button
              variant="outlined"
              color="primary"
              type={"submit"}
              className="mt-2"
              disabled={request > 0 && !loading ? false : true}
            >
              Search
            </Button>
          </form>
        </div>
        <div className="col-md-3">
          <h4 className="text-left">Request: {request} / 60</h4>
        </div>
      </div>
    </div>
  );
};

export default Search;
