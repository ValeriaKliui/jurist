import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 0;
  gap: 2em;
`;
export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Addons = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  ${devices.md} {
    gap: 1em;
    flex-basis: 60%;
    justify-content: space-between;
  }
  ${devices.sm} {
    display: none;
  }
`;
export const HeaderBottom = styled.div`
  ${devices.sm} {
    display: none;
  }
`;
