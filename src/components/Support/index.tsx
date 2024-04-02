import { SUPPORT } from "@/constants";
import { Container, ItemsContainer } from "./styled";

export const Support = () => <Container className="wrapper">
    <h4>
        Даём поддержку
    </h4>
    <ItemsContainer>
        {SUPPORT.map(({ Icon, title, description }) => <div>
            <Icon />
            <p>{title}</p>
            <p>{description}</p>
        </div>)}
    </ItemsContainer>
</Container>