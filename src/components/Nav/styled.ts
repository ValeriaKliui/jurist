import styled from "styled-components";

import { devices } from "@/providers/Theme";

export const NavList = styled.ul`
  display: flex;
  gap: 2em;
  padding: 0;
  ${devices.sm} {
    flex-direction: column;
    gap: 1em;
  }
`;
export const LiWithoutMarker = styled.li`
  list-style-type: none;
`;
