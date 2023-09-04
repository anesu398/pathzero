import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-170zp23ddyxskfm0.us.auth0.com"
     clientId="r6qKlgBhZZ6MdhAmcWFswNEnDgW9Uc8R"
     authorizationParams={{
      redirect_uri: "https://feelathome.vercel.app"
     }}
     audience="https://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
