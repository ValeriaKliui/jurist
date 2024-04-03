import { TARIFFS } from "@/constants";

import { Button } from "../Button";
import {
  Auditory,
  Container,
  LinkStyled,
  Periods,
  PointsItem,
  PointsList,
  Price,
  Subtitle,
  Tariff,
  TariffsContainer,
  Title,
} from "./styled";

export const Tariffs = () => (
  <Container className="wrapper">
    <h3>Тарифы</h3>
    <p>для всех и для каждого</p>
    <Periods>
      <Button text="1 месяц" />
      <Button text="Год" unactive />
    </Periods>
    <TariffsContainer>
      {TARIFFS.map(({ name, points, auditory, price }, index) => {
        const isFirst = index === 0;
        const priceResult = isFirst ? price : `$${price}/месяц`;

        return (
          <Tariff $isFirst={isFirst}>
            <Title $isFirst={isFirst}>{name}</Title>
            <Auditory>{auditory}</Auditory>
            <Price $isFirst={isFirst}>{priceResult}</Price>
            <Subtitle>Для Вас доступно</Subtitle>
            <PointsList $isFirst={isFirst}>
              {points.map((point) => (
                <PointsItem>{point}</PointsItem>
              ))}
            </PointsList>
            <LinkStyled>Подробнее в личном кабинете</LinkStyled>
            <Button text="Оставить заявку" />
          </Tariff>
        );
      })}
    </TariffsContainer>
  </Container>
);
