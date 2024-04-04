import SEOImg from "@assets/img/management.jpg";

import { Button } from "../Button";
import {
  Addon,
  Container,
  Image,
  ImageContainer,
  PersonInfo,
  Quotes,
  Subtitle,
  Text,
  TextContainer,
} from "./styled";

export const Management = () => (
  <Container className="wrapper">
    <ImageContainer>
      <Image src={SEOImg} />
      <Addon>
        <Quotes>“</Quotes>
        <Text className="small-text">
          Я лично буду поддерживать вас на всех этапах развития в программе.
          Обращайтесь ко мне с любым вопросом email.
        </Text>
      </Addon>
    </ImageContainer>
    <TextContainer>
      <PersonInfo>
        <p>Руководитель ООО ILC </p>
        <h3 className="no-margin">Наталья Гуторова</h3>
        <Subtitle>10 лет в управлении и юриспуденции</Subtitle>
      </PersonInfo>{" "}
      <p>
        Мы стараемся окружить заботой и создать максимально комфортные условия
        для развития каждого партнера:
      </p>
      <ul className="no-margin">
        <li>
          <p> личный наставник,</p>
        </li>
        <li>
          <p> пошаговое обучение,</p>
        </li>{" "}
        <li>
          <p>
            {" "}
            готовые инструменты для продвижения и мгновенные выплаты бонусов.
          </p>
        </li>
      </ul>
      <p>
        Больше деталей партнерской программы смотрите в личном кабинете после
        регистрации.
      </p>
      <Button text="Зарегистрироваться" />
    </TextContainer>
  </Container>
);
