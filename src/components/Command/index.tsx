import Logo from '@assets/icons/logo.svg?react';
import { Container, Option, TextContainer } from './styled';

export const Command = () => (
    <Container className="wrapper">
        <TextContainer>
            <Logo />
            <h3>Ваша личная online команда юристов</h3>
            <p>
                Мы предоставляем комплексный консалтинговый сервис с
                полисной системой обслуживания для частных клиентов и для
                бизнеса, с использованием новейших цифровых технологий.
            </p>
        </TextContainer>
        <div>
            <Option>
                <p>100+тыс</p>
                <p>Клиентов по всему миру</p>
            </Option>
            <Option>
                <p>15 лет</p>
                <p>На рынке</p>
            </Option>
            <Option>
                <p>50+</p>
                <p>Опытных юристов в штате</p>
            </Option>
            <Option>
                <p>SIRIUS</p>
                <p>Система на базе искусственного интеллекта</p>
            </Option>
        </div>
    </Container>
);
