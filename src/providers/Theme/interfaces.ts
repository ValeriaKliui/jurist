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
    lightBlue: string;
  };
  fonts: {
    logo: string;
    primary: string;
    bold: string;
  };
  radius: string;
  boxShadow: string;
}

export enum ScreenSizes {
  xs = 400,
  sm = 600,
  md = 900,
  lg = 1280,
  xl = 1440,
  xxl = 1920,
}
