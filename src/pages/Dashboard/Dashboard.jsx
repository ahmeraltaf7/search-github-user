import React from "react";
import { Info, User, Search, Navbar } from "../../components";
import loadingImage from "../../images/preloader.gif";
import { GithubContext } from "../../context/context";
import { useContext } from "react";
const Dashboard = () => {
  const { loading } = useContext(GithubContext);

  if (loading) {
    return (
      <main style={{ background: "hsl(186, 100%, 94%)", minHeight: "100vh" }}>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="loading" className="loading-img" />
      </main>
    );
  }
  return (
    <main style={{ background: "hsl(186, 100%, 94%)", minHeight: "100vh" }}>
      <Navbar />
      <Search />
      <Info />
      <User />
    </main>
  );
};

export default Dashboard;
