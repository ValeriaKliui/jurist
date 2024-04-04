import GothamEot from "@assets/fonts/GothamPro.eot";
import GothamTtf from "@assets/fonts/GothamPro.ttf";
import GothamWoff from "@assets/fonts/GothamPro.woff";
import GothamBoldEot from "@assets/fonts/GothamPro-Bold.eot";
import GothamBoldTtf from "@assets/fonts/GothamPro-Bold.ttf";
import GothamBoldWoff from "@assets/fonts/GothamPro-Bold.woff";
import { devices } from "@providers/Theme/constants";
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: Gotham Pro;
    src:
      url(${GothamWoff}) format("woff"),
      url(${GothamEot}) format("eot"),
      url(${GothamTtf}) format("ttf");
  }
  @font-face {
    font-family: Gotham Pro Bold;
    src:
      url(${GothamBoldWoff}) format("woff"),
      url(${GothamBoldEot}) format("eot"),
      url(${GothamBoldTtf}) format("ttf");
    font-weight: 700;
  }
  body,
  html {
    background-color: ${({ theme: { colors } }) => colors.background};
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  #root {
    font-size: 14px;
    font-family: ${({ theme: { fonts } }) => fonts.primary};
    height: 100%;
    display: flex;
    flex-direction: column;
    ${devices.sm} {
      font-size: 12px;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    &:hover {
      color: ${({ theme: { colors } }) => colors.brightBlue};
    }
  }
  h2,
  h3,
  h4,
  button {
    font-family: Gotham Pro Bold;
  }
  h2 {
    font-size: 3.42em;
    ${devices.sm} {
      font-size: 2.7em;
    }
    ${devices.xs} {
      font-size: 2em;
    }
  }
  h3 {
    font-size: 2.3em;
    ${devices.sm} {
      font-size: 2em;
    }
  }
  h4,
  button,
  .text {
    font-size: 1.14em;
  }
  p {
    line-height: 150%;
  }
  .small-text {
    font-size: 0.86em;
  }
  .wrapper-l {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    ${devices.xl} {
      max-width: 1200px;
    }
    ${devices.lg} {
      max-width: 840px;
    }
    ${devices.md} {
      max-width: 540px;
    }
    ${devices.sm} {
      max-width: 360px;
    }
    ${devices.xs} {
      max-width: 300px;
    }
  }
  .wrapper {
    max-width: 1062px;
    margin: 0 auto;
    width: 100%;
    ${devices.xl} {
      max-width: 800px;
    }
    ${devices.md} {
      max-width: 540px;
    }
    ${devices.sm} {
      max-width: 360px;
    }
    ${devices.xs} {
      max-width: 300px;
    }
  }
  .subtext {
    color: ${({ theme: { colors } }) => colors.lightGray};
  }
  .bold {
    font-weight: 700;
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 5em;
  }
  .no-margin {
    margin: 0;
  }
`;
