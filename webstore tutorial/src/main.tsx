import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap import after running npm i react-router-dom bootstrap react-bootstrap
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* wrap app in browser router imported from react-router-dom */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
