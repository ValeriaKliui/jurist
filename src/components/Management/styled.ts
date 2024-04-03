import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6em;
`;
export const ImageContainer = styled.div`
  position: relative;
`;
export const Addon = styled.div`
  background: linear-gradient(338deg, #f0ebff 0%, #fff 100%);
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 2em;
  border-radius: ${({ theme }) => theme.radius};
  width: min-content;
  min-width: 70%;
  position: relative;
  left: 50%;
  bottom: 10%;
`;
export const Text = styled.div`
  font-style: italic;
  margin: 0;
`;
export const Quotes = styled.p`
  font-size: 2.3em;
  font-weight: 700;
  margin: 0;
`;
export const Subtitle = styled.p`
  font-weight: 700;
`;
