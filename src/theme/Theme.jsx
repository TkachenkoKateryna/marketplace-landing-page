import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "rgb(65, 61, 238)",
    primaryLight: "rgb(65, 61, 238, 0.1)",
    white: "#fff",
  },
  fontSizes: {
    "x-small": "12px",
    small: "16px",
    medium: "24px",
    large: "36px",
  },
  btn: {
    padding: {
      left: "30px",
      right: "30px",
      top: "10px",
      bottom: "10px",
    },
  },
  icons: {
    shoppingCart: "add_shopping_cart",
    logout: "logout",
  },
};

console.log("theme", theme);
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
