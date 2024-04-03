import { Container, ImageContainer, Addon, Text, Quotes } from "./styled";
import SEOImg from "@assets/img/management.jpg";

export const Management = () => (
  <Container className="wrapper">
    <ImageContainer>
      <img src={SEOImg} />
      <Addon>
        <Quotes />
        <Text className="small-text">
          Я лично буду поддерживать вас на всех этапах развития в программе.
          Обращайтесь ко мне с любым вопросом email.
        </Text>
      </Addon>
    </ImageContainer>
  </Container>
);
