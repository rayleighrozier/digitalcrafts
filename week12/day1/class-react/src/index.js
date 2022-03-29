import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Where jsx gets converted to HTML , only place that actually calls react

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
