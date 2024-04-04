import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemsContainer = styled.div`
  display: flex;
  gap: 1em;
  ${devices.md} {
    flex-direction: column;
  }
`;
export const SupportItem = styled.div`
  padding: 1.5em;
  background-color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme: { radius } }) => radius};
  ${devices.md} {
    text-align: center;
  }
`;
export const StyledIcon = styled.div`
  align-self: center;
`;
