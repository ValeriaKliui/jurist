import { BONUSES } from '@/constants';
import { Button } from '../Button';
import {
    Container,
    Main,
    PeopleImg,
    Sub,
    TextContainer,
    Text,
    SubItem,
} from './styled';

export const Preview = () => (
    <Container className="wrapper-l">
        <Main>
            <TextContainer>
                <h2>
                    Юридический полис ILC — быстрое решение сложных вопросов
                    24/7
                </h2>
                <Text>
                    Ваша личная команда профессиональных юристов, которая всегда
                    под рукой. А также доступ к бонусам партнерской программы —
                    доход до $260 с каждого полиса, купленного по вашему
                    приглашению.
                </Text>
                <Button text="Попробовать бесплатно" />
            </TextContainer>
            <PeopleImg />
        </Main>
        <Sub>
            {BONUSES.map(({ Icon, bonus }) => (
                <SubItem>
                    <Icon />
                    <h4>{bonus}</h4>
                </SubItem>
            ))}
        </Sub>
    </Container>
);
