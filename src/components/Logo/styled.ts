import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  gap: 1.5em;
  align-items: center;
`;

export const LogoText = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.logo};
  font-size: 1.14em;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 400;
  flex-basis: 40%;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
  flex-basis: 50%;
`;
