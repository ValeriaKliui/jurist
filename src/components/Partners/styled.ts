import EarthImg from "@assets/img/earth.png";
import PeopleImg from "@assets/img/people_bg.svg";
import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Background = styled.div`
  background: url(${EarthImg}) right top no-repeat
    ${({ theme: { colors } }) => colors.blue};
  background-size: contain;
  padding: 4em 0 0 0;
  color: ${({ theme: { colors } }) => colors.white};
  ${devices.lg} {
    background-size: cover;
    background-position: -30%;
  }
  ${devices.sm} {
    background-position: 26%;
  }
`;
export const TextContainer = styled.div`
  background: url(${PeopleImg}) no-repeat;
  background-size: contain;
  padding: 2.2em 0 0 0;
  min-height: 300px;
  ${devices.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const Text = styled.p`
  max-width: 29%;
  ${devices.md} {
    max-width: 50%;
  }
  ${devices.sm} {
    max-width: 90%;
  }
`;
