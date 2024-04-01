import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ theme: { colors } }) => colors.primary};
  padding: 1.14em 2.28em;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme: { colors } }) => colors.white};
  border: none;
  cursor: pointer;
  width: fit-content;
`;
