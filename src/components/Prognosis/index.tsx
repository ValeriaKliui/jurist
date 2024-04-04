import { FC } from "react";

import { PROGNOSISES } from "@/constants";

import {
  Background,
  Container,
  Grid,
  PrognosisContainer,
  Title,
} from "./styled";

export const Prognosis: FC = () => (
  <Background>
    <Container className="wrapper-l">
      <h3>Прогнозы партнерской программы на 2021 год</h3>
      <Grid>
        {PROGNOSISES.map(({ prognose, text, gradientDeg }) => (
          <PrognosisContainer key={prognose}>
            <Title $gradientDeg={gradientDeg}>{prognose}</Title>
            <p>{text}</p>
          </PrognosisContainer>
        ))}
      </Grid>
    </Container>
  </Background>
);
