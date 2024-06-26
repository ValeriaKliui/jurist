import { useState } from "react";

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

export const Tariffs = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const period = isMonthly ? "месяц" : "год";

  return (
    <Container className="wrapper">
      <h3>Тарифы</h3>
      <p>для всех и для каждого</p>
      <Periods>
        <Button
          text="1 месяц"
          unactive={isMonthly === false}
          onClick={() => setIsMonthly(true)}
        />
        <Button
          text="Год"
          unactive={isMonthly === true}
          onClick={() => setIsMonthly(false)}
        />
      </Periods>
      <TariffsContainer>
        {TARIFFS.map(({ name, points, auditory, price }, index) => {
          const isFirst = index === 0;
          const totalPrice = isMonthly ? price : +price * 12;
          const priceResult = isFirst ? price : `$${totalPrice}/${period}`;

          return (
            <Tariff $isFirst={isFirst} key={name}>
              <Title $isFirst={isFirst}>{name}</Title>
              <Auditory>{auditory}</Auditory>
              <Price $isFirst={isFirst}>{priceResult}</Price>
              <Subtitle>Для Вас доступно</Subtitle>
              <PointsList $isFirst={isFirst}>
                {points.map((point) => (
                  <PointsItem key={point}>{point}</PointsItem>
                ))}
              </PointsList>
              <LinkStyled to="">Подробнее в личном кабинете</LinkStyled>
              <Button text="Оставить заявку" block />
            </Tariff>
          );
        })}
      </TariffsContainer>
    </Container>
  );
};
