import Arrow from "@assets/icons/arrow.svg";
import Marker from "@assets/icons/list-s.svg";
import { devices } from "@providers/Theme/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Periods = styled.div`
  display: flex;
  gap: 2em;
  margin-bottom: 2em;
`;
export const TariffsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  ${devices.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Tariff = styled.div<{ $isFirst: boolean }>`
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 3em;
  grid-column: span ${({ $isFirst }) => ($isFirst ? 2 : 1)};
  display: flex;
  flex-direction: column;
  align-items: ${({ $isFirst }) => ($isFirst ? "center" : "unset")};
  border-radius: ${({ theme: { radius } }) => radius};
  ${devices.md} {
    grid-column: unset;
    align-items: center;
  }
  ${devices.sm} {
    padding: 1em 2em;
  }
`;
export const Title = styled.p<{ $isFirst: boolean }>`
  color: ${({ theme: { colors } }) => colors.brightBlue};
  font-family: ${({ theme: { fonts } }) => fonts.bold};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 1.14em;
  order: ${({ $isFirst }) => ($isFirst ? -2 : "unset")};
`;
export const Auditory = styled.p`
  color: ${({ theme: { colors } }) => colors.gray};
  ${devices.sm} {
    text-align: center;
  }
`;
export const LinkStyled = styled(Link)`
  color: ${({ theme: { colors } }) => colors.brightBlue};
  display: flex;
  font-weight: 700;
  gap: 1em;
  margin-bottom: 1.5em;
  &::after {
    display: inline-block;
    content: url(${Arrow});
  }
`;
export const Price = styled.p<{ $isFirst: boolean }>`
  font-family: ${({ $isFirst, theme: { fonts } }) =>
    $isFirst ? fonts.primary : fonts.bold};
  font-weight: 700;
  order: ${({ $isFirst }) => ($isFirst ? -1 : "unset")};
  color: ${({ $isFirst, theme: { colors } }) =>
    $isFirst ? colors.lightestGray : "inherit"};
  font-size: ${({ $isFirst }) => ($isFirst ? "2.3em" : "inherit")};
  margin: ${({ $isFirst }) => ($isFirst ? ".3em" : "inherit")};
  ${devices.md} {
    font-size: ${({ $isFirst }) => ($isFirst ? "1.8em" : "inherit")};
    margin: inherit;
  }
`;
export const Subtitle = styled.p`
  font-weight: 700;
`;
export const PointsList = styled.ul<{ $isFirst: boolean }>`
  display: grid;
  grid-template-columns: repeat(
    ${({ $isFirst }) => ($isFirst ? "2,  fit-content(50%)" : "1, 1fr")}
  );
  gap: 1.4em;
  padding: 0.7em;
  justify-content: end;
  ${devices.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const PointsItem = styled.li`
  padding-left: 1em;
  &::marker {
    content: url(${Marker});
  }
`;
