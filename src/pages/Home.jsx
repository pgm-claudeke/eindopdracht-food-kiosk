import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/styles';
import ROUTES from '../constants/routes';

const HomeContainer = styled.a`
    text-decoration: none;
`;

const ImgBox = styled.div`
    height: 86vh;
    background-color: ${colors.secondary}
`;

const TextBox = styled.div`
    height: 14vh;
    width: 100%;
    background-color: ${colors.primary};

    color: ${colors.base};
    font-weight: bold;
    font-size: 5rem;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
  return (
    <>
        <HomeContainer  href={ROUTES.DINE}>
            <ImgBox>
        
            </ImgBox>
            <TextBox>Tab the screen to order</TextBox>
        </HomeContainer>
    </>
  )
}

export default Home