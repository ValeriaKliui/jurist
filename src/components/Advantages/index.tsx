import { ADVANTAGES } from "@/constants";

import { Button } from "../Button";
import { Advantage, Container, IconContainer } from "./styled";

export const Advantages = () => (
  <Container className="wrapper">
    {ADVANTAGES.map(({ title, Icon, DescriptionComponent }) => (
      <Advantage>
        <IconContainer>
          <Icon />
        </IconContainer>
        <div>
          <h4>{title}</h4>
          {DescriptionComponent}
        </div>
      </Advantage>
    ))}
    <Button text="Стать партнером" />
  </Container>
);
