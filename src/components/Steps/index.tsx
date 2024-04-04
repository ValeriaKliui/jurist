import TargetImg from "@assets/icons/target.svg?react";

import { Button } from "../Button";
import {
  Container,
  DiagramImage,
  Number,
  Step,
  StepsContainer,
} from "./styled";

export const Steps = () => (
  <Container className="wrapper">
    <h3>Начать легко</h3>
    <StepsContainer>
      <Step style={{ gridArea: "s1" }}>
        <Number>1</Number>
        <h4 className="no-margin">Регистрация</h4>
        <p>
          Заполните простую форму для участия в программе и активируйте
          клиентский пакет.
        </p>
      </Step>
      <Step style={{ gridArea: "s2" }}>
        <Number>2</Number>
        <h4 className="no-margin">Обучение</h4>
        <p>
          Вас ждут полезные обучающие материалы, с помощью которых вы легко
          сможете монетизировать свое время.
        </p>
      </Step>
      <Step style={{ gridArea: "s3" }}>
        <DiagramImage />
        <Number>3</Number>
        <h4 className="no-margin">Стратегия</h4>
        <p>
          Воспользуйтесь подробным и понятным алгоритмом действий для достижения
          классных результатов.
        </p>
      </Step>
      <Step style={{ gridArea: "s4", height: "min-content" }}>
        <TargetImg />
        <h4 className="no-margin">Результат</h4>
        <p>
          Зарабатывайте до 35% с каждой покупки полиса по вашей партнерской
          ссылке с первых дней после регистрации.
        </p>
        <Button text="Начать зарабатывать" centered />
      </Step>
    </StepsContainer>
  </Container>
);
