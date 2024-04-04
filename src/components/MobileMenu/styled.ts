import styled from "styled-components";

export const Container = styled.div<{ $isMenuOpened: boolean }>`
  position: absolute;
  left: ${({ $isMenuOpened }) => ($isMenuOpened ? 0 : "-100%")};
  top: ${({ $isMenuOpened }) => ($isMenuOpened ? 0 : "-100%")};
  width: calc(100% - 1em);
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.background};
  z-index: 100;
  padding: 1em 0 0 1em;
`;
