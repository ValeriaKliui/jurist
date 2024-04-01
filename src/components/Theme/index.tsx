import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { BaseTheme, ThemeProps } from "./interfaces";

const theme: BaseTheme = {
  colors: {
    primary: "#3B1D8F",
    secondary: "#CFDAE7",
    white: "#ffffff",
    background: "#F4F7FA",
    footer: "#E8EDF3",
    gray: "#7A7A7A",
    blue: "#273895",
    lightGray: "#B7B6B6",
  },
  fonts: {
    logo: "Roboto, sans-serif",
    primary: "Gotham Pro",
    bold: "Gotham Pro Bold",
  },
  radius: "1.14em",
};

export const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
