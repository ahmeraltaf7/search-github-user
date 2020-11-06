import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

//create Context

export const GithubContext = createContext();

//provider component

export const GlobalProvider = ({ children }) => {
  const [githubUsers, setGithubUsers] = useState(mockUser);
  const [followers, setfollowers] = useState(mockFollowers);

  //request loading
  const [request, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);

  //error
  const [error, setError] = useState({ show: false, msg: "" });

  //Search User Function
  const searchGithubUser = async (user) => {
    toggleError();
    setLoading(true);

    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((error) => console.log(error));

    if (response) {
      setGithubUsers(response.data);

      //destructure followers
      const { followers_url } = response.data;

      //Get followers and set followers
      axios(`${followers_url}?per_page=100`).then((res) =>
        setfollowers(res.data)
      );
    } else {
      toggleError(true, "Sorry, user not found.");
    }
    setLoading(false);
  };

  //Fetch Limit Request data using axios
  const fetchRequestData = async () => {
    try {
      const {
        data: {
          rate: { remaining },
        },
      } = await axios.get(`${rootUrl}/rate_limit`);
      if (remaining === 0) {
        toggleError(
          true,
          "Sorry, you are out of your requests wait 1 hour for more requests."
        );
      }
      return remaining;
    } catch (error) {
      console.log(error);
    }
  };

  //Fuction for error message
  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  //Fetching request data
  useEffect(() => {
    (async () => {
      setRequest(await fetchRequestData());
    })();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUsers,
        followers,
        request,
        error,
        loading,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
