import "react-toggle/style.css";
import "./src/styles/global.css";
import "prismjs/themes/prism.css";

import React from "react";

import ThemeContextProvider from "./src/context/ThemeContext";

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
