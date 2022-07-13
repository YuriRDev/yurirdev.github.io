import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Pages/Main";

// Styles import
import GlobalStyles from "./GlobalStyles";
import Stacks from "./Pages/Stacks";
import Projects from "./Pages/Projects";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Main />
    <Stacks />
    <Projects />
  </React.StrictMode>
);
