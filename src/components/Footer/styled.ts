import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: auto;
  ${devices.sm} {
    font-size: 0.85em;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  border-top: 1px solid ${({ theme: { colors } }) => colors.secondary};
  ${devices.md} {
    flex-direction: column;
    align-items: center;
  }
`;
export const NetworksList = styled.ul`
  padding: 0;
  display: flex;
  gap: 0.5em;
  ${devices.md} {
    gap: 1em;
  }
`;
export const IconContainer = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  width: 2.3em;
  height: 2.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35%;
  &:hover {
    transform: scale(1.02);
  }
  ${devices.md} {
    width: 3.5em;
    height: 3.5em;
  }
`;
export const FooterBottom = styled.div`
  background-color: ${({ theme: { colors } }) => colors.footer};
  padding: 1em;
  color: ${({ theme: { colors } }) => colors.gray};
  ${devices.sm} {
    padding: 2em;
  }
`;
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${devices.md} {
    flex-direction: column;
    gap: 2em;
  }
`;
export const Links = styled.div`
  font-size: 0.71em;
  display: flex;
  gap: 1em;
  ${devices.md} {
    display: flex;
    flex-direction: column;
    order: -1;
  }
`;
