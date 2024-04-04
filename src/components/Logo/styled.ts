import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const TextContainer = styled.div<{
  $isReverted?: boolean;
  $isShort?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 3em;
  flex-basis: 50%;
  ${devices.md} {
    flex-direction: ${({ $isReverted = false }) => $isReverted && "column"};
    text-align: center;
    p {
      display: ${({ $isShort = false }) => ($isShort ? "none" : "inherit")};
    }
  }
  ${devices.sm} {
    flex-basis: 60%;
  }
  ${devices.xs} {
    flex-basis: 70%;
  }
`;
export const LogoContainer = styled.div<{ $isShort?: boolean }>`
  display: flex;
  gap: 1.5em;
  align-items: center;
  &:hover {
    transform: scale(1.03);
  }
  ${devices.md} {
    justify-content: ${({ $isShort = false }) =>
      $isShort ? "inherit" : "center"};
  }
  ${devices.sm} {
    svg {
      flex-basis: 32%;
    }
  }
`;
export const LogoText = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.logo};
  font-size: 1.14em;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 400;
  flex-basis: 40%;
`;
