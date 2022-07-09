import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Pages/Main";

// Styles import
import GlobalStyles from "./GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Main />
  </React.StrictMode>
);
