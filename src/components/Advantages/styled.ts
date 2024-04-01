import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;
export const Advantage = styled.div`
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: ${({ theme: { radius } }) => radius};
  padding: 3.5em 8.5em;
  gap: 2em;
  align-items: center;
  align-self: stretch;
`;
export const IconContainer = styled.div`
  min-width: 28%;
`;
