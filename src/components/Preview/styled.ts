import styled from 'styled-components';
import PeopleImage from '@assets/img/people-talking.svg?react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Main = styled.div`
  display: flex;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const Text = styled.p`
  max-width: 65%;
`;
export const Sub = styled.div`
  align-self: flex-end;
  display: flex;
  box-shadow: 0 4px 100px 0 rgba(208, 218, 227, 0.57);
  background-color: ${({ theme: { colors } }) => colors.background};
  border-radius: ${({ theme }) => theme.radius};
  padding: 2em 2em 1em 2em;
  justify-content: space-between;
  position: relative;
  top: -5em;
  max-width: 60%;
`;
export const PeopleImg = styled(PeopleImage)`
  flex-basis: 70%;
`;
export const SubItem = styled.div`
  flex-basis: 35%;
`;
