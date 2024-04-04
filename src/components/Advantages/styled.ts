import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  ${devices.md} {
    .bold {
      font-weight: 400;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const Advantage = styled.div`
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: ${({ theme: { radius } }) => radius};
  padding: 3.5em 8.5em;
  gap: 2em;
  align-items: center;
  align-self: stretch;
  ${devices.lg} {
    padding: 3.5em 4.5em;
    gap: 5em;
  }
  ${devices.md} {
    flex-direction: column;
    gap: 0;
    text-align: center;
  }
  ${devices.sm} {
    padding: 2em 3em;
  }
`;
export const IconContainer = styled.div`
  min-width: 28%;
`;
