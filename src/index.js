import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { GlobalProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="reactjs-prac-projects.us.auth0.com"
      clientId="6OgBFRYKmadJqqZpPET71Ls2uQD9rNRb"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
