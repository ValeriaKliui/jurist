import Logo from "@assets/icons/logo.svg?react";

import {
  BiggestText,
  Container,
  LeftCircle,
  LeftSmallCircle,
  MiddleText,
  Option,
  OptionsContainer,
  RelativeContainer,
  RightCircle,
  SmallestSpacedText,
  SmallestText,
  StyledContainer,
  TextContainer,
} from "./styled";

export const Command = () => (
  <Container className="wrapper">
    <TextContainer>
      <Logo />
      <h3>Ваша личная online команда юристов</h3>
      <p>
        Мы предоставляем комплексный консалтинговый сервис с полисной системой
        обслуживания для частных клиентов и для бизнеса, с использованием
        новейших цифровых технологий.
      </p>
    </TextContainer>
    <OptionsContainer>
      <Option>
        <span>
          <BiggestText>100+</BiggestText>
          <SmallestText>тыс</SmallestText>
        </span>
        <p>Клиентов по всему миру</p>
      </Option>
      <RelativeContainer>
        <RightCircle />
        <Option>
          <span>
            <MiddleText>15 </MiddleText>
            <SmallestText>лет</SmallestText>
          </span>
          <p>На рынке</p>
        </Option>
      </RelativeContainer>
      <StyledContainer>
        <LeftCircle />
        <Option>
          <MiddleText>50+</MiddleText>
          <p>Опытных юристов в штате</p>
        </Option>
      </StyledContainer>
      <RelativeContainer>
        <LeftSmallCircle />
        <Option>
          <SmallestSpacedText>SIRIUS</SmallestSpacedText>
          <p>Система на базе искусственного интеллекта</p>
        </Option>
      </RelativeContainer>
    </OptionsContainer>
  </Container>
);
