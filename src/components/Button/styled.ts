import styled from "styled-components";

import { devices } from "@/providers/Theme/constants";

export const ButtonStyled = styled.button<{
  $unactive?: boolean;
  $centered?: boolean;
  $block?: boolean;
}>`
  background-color: ${({ $unactive = false, theme: { colors } }) =>
    $unactive ? "transparent" : colors.primary};
  padding: 1.14em 2.28em;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ $unactive = false, theme: { colors } }) =>
    $unactive ? colors.blue : colors.white};
  border: none;
  width: fit-content;
  cursor: pointer;
  position: relative;
  margin: ${({ $centered = false }) => ($centered ? "0 auto" : "inherit")};
  &::after {
    display: block;
    content: "";
    position: relative;
    top: 7px;
    width: 100%;
    height: 2px;
    border-bottom: 2px dotted
      ${({ $unactive, theme: { colors } }) =>
        $unactive ? colors.blue : "transparent"};
  }
  &:hover {
    background-color: ${({ $unactive, theme: { colors } }) =>
      $unactive ? "transparent" : colors.brightBlue};
    color: ${({ $unactive, theme: { colors } }) =>
      $unactive ? colors.brightBlue : colors.white};
    &::after {
      border-bottom: 2px dotted
        ${({ $unactive, theme: { colors } }) =>
          $unactive ? colors.brightBlue : "transparent"};
    }
  }
  ${devices.sm} {
    width: ${({ $block = false }) => ($block ? "100%" : "fit-content")};
  }
`;
