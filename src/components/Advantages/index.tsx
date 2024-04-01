import { ADVANTAGES } from "@/constants";
import { Container, Advantage, IconContainer } from "./styled";
import { Button } from "../Button";

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
