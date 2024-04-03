import { SUPPORT } from "@/constants";

import { Container, ItemsContainer, StyledIcon, SupportItem } from "./styled";

export const Support = () => (
  <Container className="wrapper">
    <h4>Даём поддержку</h4>
    <ItemsContainer>
      {SUPPORT.map(({ Icon, title, description }) => (
        <SupportItem>
          <StyledIcon>
            <Icon />
          </StyledIcon>
          <h4>{title}</h4>
          <p>{description}</p>
        </SupportItem>
      ))}
    </ItemsContainer>
  </Container>
);
