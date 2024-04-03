import styled from "styled-components";

export const ButtonStyled = styled.button<{ $unactive: boolean }>`
  background-color: ${({ $unactive, theme: { colors } }) =>
    $unactive ? "transparent" : colors.primary};
  padding: 1.14em 2.28em;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ $unactive, theme: { colors } }) =>
    $unactive ? colors.blue : colors.white};
  border: none;
  cursor: pointer;
  width: fit-content;
  position: relative;
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
`;
