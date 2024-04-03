import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "s1 s3 s4" "s2 s3 s4";
  gap: 1em;
`;
export const Step = styled.div`
  padding: 2em;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Number = styled.div`
  border: 2px solid ${({ theme: { colors } }) => colors.dark};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-weight: 700;
  font-family: ${({ theme: { fonts } }) => fonts.bold};
`;
