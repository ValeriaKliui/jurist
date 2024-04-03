import { ReactNode } from "react";

export interface ThemeProps {
  children: ReactNode;
}

export interface BaseTheme {
  colors: {
    primary: string;
    secondary: string;
    white: string;
    background: string;
    footer: string;
    gray: string;
    blue: string;
    lightGray: string;
    lightestGray: string;
    brightBlue: string;
    dark: string;
  };
  fonts: {
    logo: string;
    primary: string;
    bold: string;
  };
  radius: string;
  boxShadow: string;
}
