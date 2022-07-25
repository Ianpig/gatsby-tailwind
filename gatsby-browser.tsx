import "react-toggle/style.css";
import "./src/styles/global.css";
import "prism-themes/themes/prism-one-dark.min.css";

import React from "react";

import ThemeContextProvider from "./src/context/ThemeContext";

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
