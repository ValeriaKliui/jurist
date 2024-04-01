import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: auto;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
`;
export const NetworksList = styled.ul`
  padding: 0;
  display: flex;
  gap: 0.5em;
`;
export const IconContainer = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  width: 2.3em;
  height: 2.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35%;
`;
export const FooterBottom = styled.div`
  background-color: ${({ theme: { colors } }) => colors.footer};
  padding: 1em;
  color: ${({ theme: { colors } }) => colors.gray};
`;
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Links = styled.div`
  font-size: 0.71em;
  display: flex;
  gap: 1em;
`;
