import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import './styles.css';
// import { HelloWorldApp } from "./HelloWorldApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title="Hola" />
  </React.StrictMode>
);
