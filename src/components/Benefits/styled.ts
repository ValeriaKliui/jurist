import Marker from "@assets/icons/list.svg";
import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Description = styled.div`
  display: flex;
  ${devices.md} {
    flex-direction: column;
    gap: 2em;
    margin-bottom: 2em;
  }
`;
export const BlockTitle = styled.h4`
  letter-spacing: 0.17em;
  color: ${({ theme: { colors } }) => colors.blue};
`;
export const BenefitsContainer = styled.div`
  display: flex;
  gap: 1em;
  position: relative;
  top: -10%;
  margin-bottom: -5%;
  ${devices.md} {
    position: unset;
    flex-direction: column;
  }
`;
export const Benefit = styled.div`
  background: linear-gradient(200deg, #fff 0%, #f4f9ff 100%);
  padding: 2em;
  flex-basis: 120%;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  ${devices.lg} {
    &:last-child {
      display: none;
    }
  }
  ${devices.md} {
    &:last-child {
      display: block;
    }
  }
`;
export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex: 1 1 0;
`;
export const BenefitItem = styled.li`
  padding-left: 1em;
  &::marker {
    content: url(${Marker});
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  ${devices.md} {
    flex-direction: column;
  }
`;
export const TextContainer = styled.div`
  flex: 1 1 0;
`;
export const Image = styled.img`
  width: fit-content;
`;
