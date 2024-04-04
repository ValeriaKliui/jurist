import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6em;
  ${devices.lg} {
    gap: 3em;
  }
  ${devices.md} {
    flex-direction: column;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageContainer = styled.div`
  position: relative;
  ${devices.md} {
    order: 2;
  }
`;
export const Image = styled.img`
  ${devices.md} {
    max-width: 60%;
  }
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
  ${devices.lg} {
    left: 45%;
  }
  ${devices.md} {
    left: 25%;
    min-width: 50%;
  }
  ${devices.sm} {
    left: 15%;
    min-width: 60%;
  }
`;
export const Text = styled.div`
  font-style: italic;
  margin: 0;
`;
export const Quotes = styled.p`
  font-size: 2.3em;
  font-weight: 700;
  margin: 0;
  ${devices.sm} {
    font-size: 1.8em;
  }
`;
export const Subtitle = styled.p`
  font-weight: 700;
`;
export const PersonInfo = styled.div`
  ${devices.md} {
    text-align: center;
  }
`;
