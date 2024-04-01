import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme: { colors } }) => colors.blue};
  padding: 8em 0;
  color: ${({ theme: { colors } }) => colors.white};
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8em;
  align-items: center;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
`;
export const PrognosisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.p<{ $gradientDeg: number }>`
  font-size: 2.3em;
  background: linear-gradient(
    ${({ $gradientDeg }) => $gradientDeg}deg,
    #4614e8 0%,
    #bca7ff 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${({ theme: { fonts } }) => fonts.bold};
  margin: 0;
`;
