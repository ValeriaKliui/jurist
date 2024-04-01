import { FC } from "react";
import {
  Container,
  Background,
  Grid,
  Title,
  PrognosisContainer,
} from "./styled";
import { PROGNOSISES } from "@/constants";

export const Prognosis: FC = () => (
  <Background>
    <Container className="wrapper-l">
      <h3>Прогнозы партнерской программы на 2021 год</h3>
      <Grid>
        {PROGNOSISES.map(({ prognose, text, gradientDeg }) => (
          <PrognosisContainer>
            <Title $gradientDeg={gradientDeg}>{prognose}</Title>
            <p>{text}</p>
          </PrognosisContainer>
        ))}
      </Grid>
    </Container>
  </Background>
);
