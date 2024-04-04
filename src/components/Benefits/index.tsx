import PhoneImgSrc from "@assets/img/phone.png";

import { BENEFITS, BENEFITS_LIST } from "@/constants";

import {
  Benefit,
  BenefitItem,
  BenefitsContainer,
  BenefitsList,
  BlockTitle,
  Container,
  Description,
  FlexContainer,
  Image,
  TextContainer,
} from "./styled";

export const Benefits = () => (
  <Container className="wrapper-l">
    <h3>Преимущества сервиса</h3>
    <Description className="wrapper">
      <Image src={PhoneImgSrc} />
      <div>
        <BlockTitle>SIRIUS</BlockTitle>
        <FlexContainer>
          <TextContainer>
            <p>
              — первый полноценный искусственный интеллект, самостоятельно
              консультирующий людей по любым юридическим вопросам в режиме
              реального времени.
            </p>
            <p>
              Sirius анализирует входящий запрос и оперативно генерирует
              квалифицированный ответ на основании юридической логики.
            </p>
            <p>
              Доступ к системе предоставляется владельцу полиса в личном
              кабинете на нашем сайте.
            </p>
          </TextContainer>
          <BenefitsList>
            {BENEFITS_LIST.map((benefit) => (
              <BenefitItem key={benefit}>{benefit}</BenefitItem>
            ))}
          </BenefitsList>
        </FlexContainer>
      </div>
    </Description>
    <BenefitsContainer>
      {BENEFITS.map(({ Icon, title, description }) => (
        <Benefit key={title}>
          <Icon />
          <h4>{title}</h4>
          <p>{description}</p>
        </Benefit>
      ))}
    </BenefitsContainer>
  </Container>
);
