import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "rgb(65, 61, 238)",
    primaryLight: "rgb(65, 61, 238, 0.1)",
    secondary: "rgb(235, 49, 49)",
    secondaryLight: "rgb(235, 49, 49, 0.1)",
    white: "#fff",
  },
  fontSizes: {
    "x-small": "13px",
    small: "16px",
    medium: "24px",
    large: "36px",
  },
  fontClr: {
    default: "#020E27",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
