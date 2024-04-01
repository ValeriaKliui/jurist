import styled from "styled-components";
import EarthImg from "@assets/img/earth.png";
import PeopleImg from "@assets/img/people_bg.svg";

export const Background = styled.div`
  background: url(${EarthImg}) right top no-repeat
    ${({ theme: { colors } }) => colors.blue};
  background-size: contain;
  padding: 4em 0 0 0;
  color: ${({ theme: { colors } }) => colors.white};
`;
export const TextContainer = styled.div`
  background: url(${PeopleImg}) no-repeat;
  background-size: contain;
  padding: 2.2em 0 0 0;
  min-height: 300px;
`;
export const Text = styled.p`
  max-width: 29%;
`;
