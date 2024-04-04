import IncomeImg from "@assets/icons/income.svg?react";
import PeopleImage from "@assets/img/people-talking.svg?react";
import PeopleImgSrc from "@assets/img/process.svg";
import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${devices.md} {
    gap: 3em;
  }
`;
export const Main = styled.div`
  display: flex;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  ${devices.md} {
    text-align: center;
    align-items: center;
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background: url(${PeopleImgSrc}) no-repeat;
      background-size: 70%;
      background-position: bottom center;
      z-index: -1;
    }
  }
`;
export const Text = styled.p`
  max-width: 65%;
`;
export const Sub = styled.div`
  align-self: flex-end;
  display: flex;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme: { colors } }) => colors.background};
  border-radius: ${({ theme }) => theme.radius};
  padding: 2em 2em 1em 2em;
  justify-content: space-between;
  position: relative;
  top: -5em;
  max-width: 60%;
  ${devices.md} {
    flex-direction: column;
    top: 0;
    align-self: center;
    text-align: center;
  }
`;
export const PeopleImg = styled(PeopleImage)`
  flex-basis: 70%;
  ${devices.md} {
    display: none;
  }
`;
export const SubItem = styled.div`
  flex-basis: 35%;
`;
export const IncomeImage = styled(IncomeImg)`
  display: none;
  ${devices.md} {
    display: block;
  }
`;
