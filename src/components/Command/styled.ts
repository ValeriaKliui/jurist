import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${devices.md} {
    flex-direction: column;
  }
`;
export const TextContainer = styled.div`
  flex-basis: 40%;
  ${devices.md} {
    text-align: center;
    max-width: 80%;
  }
`;
export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 200px));
  align-items: end;
  gap: 2em;
  ${devices.xs} {
    gap: 1em;
  }
`;
export const Option = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: linear-gradient(200deg, #fff 0%, #f4f9ff 100%);
  padding: 1.5em;
  width: min-content;
  min-width: 65%;
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${devices.xs} {
    padding: 1em;
  }
`;
export const Circle = styled.div`
  border-radius: 100%;
  background: linear-gradient(90deg, #e1d8ff 0%, #f4ecff 100%);
  position: absolute;
  z-index: -1;
`;
export const RelativeContainer = styled.div`
  position: relative;
  z-index: 0;
`;
export const StyledContainer = styled(RelativeContainer)`
  align-self: flex-start;
  justify-self: flex-end;
  min-width: 95%;
  margin-right: -1.4em;
`;
export const RightCircle = styled(Circle)`
  width: 160px;
  height: 160px;
  top: -100px;
  right: -50px;
  ${devices.md} {
    width: 100px;
    height: 100px;
    top: -50px;
    right: -30px;
  }
  ${devices.md} {
    top: -50px;
    right: 0px;
  }
`;
export const LeftCircle = styled(Circle)`
  width: 40px;
  height: 40px;
  top: -20px;
  left: -20px;
`;
export const LeftSmallCircle = styled(Circle)`
  width: 25px;
  height: 25px;
  top: 30px;
  left: -15px;
`;
export const ColoredText = styled.span`
  background: linear-gradient(180deg, #4614e8 0%, #bca7ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-family: ${({ theme: { fonts } }) => fonts.bold};
`;
export const BiggestText = styled(ColoredText)`
  font-size: 3.4em;
  ${devices.xs} {
    font-size: 2.5em;
  }
`;
export const MiddleText = styled(ColoredText)`
  font-size: 2.6em;
  ${devices.xs} {
    font-size: 2em;
  }
`;
export const SmallestText = styled(ColoredText)`
  font-size: 1.2em;
  ${devices.xs} {
    font-size: 1em;
  }
`;
export const SmallestSpacedText = styled(SmallestText)`
  letter-spacing: 0.17em;
  margin: 1.5em 4.5em 0 0;
`;
