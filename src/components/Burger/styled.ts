import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: none;
  ${devices.sm} {
    display: flex;
    background-color: ${({ theme: { colors } }) => colors.lightBlue};
    border-radius: ${({ theme }) => theme.radius};
    padding: 1.5em;
    width: 2.3em;
    height: 2.3em;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    z-index: 1000;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.brightBlue};
      span {
        background-color: ${({ theme: { colors } }) => colors.lightBlue};
      }
    }
  }
`;
export const Line = styled.span<{ $isMenuOpened: boolean }>`
  width: 100%;
  height: 3px;
  background-color: ${({ theme: { colors } }) => colors.brightBlue};
  display: block;
  border-radius: ${({ theme }) => theme.radius};
  &:nth-child(1) {
    transform: ${({ $isMenuOpened }) =>
      $isMenuOpened && "rotate(45deg) translate(0.41em, 0.41em)"};
  }
  &:nth-child(2) {
    display: ${({ $isMenuOpened }) => ($isMenuOpened ? "none" : "block")};
  }
  &:nth-child(3) {
    transform: ${({ $isMenuOpened }) =>
      $isMenuOpened && "rotate(-45deg) translate(0.41em, -0.33em)"};
  }
`;
