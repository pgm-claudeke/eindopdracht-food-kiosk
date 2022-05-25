import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights } from '../constants/styles';
import ROUTES from '../constants/routes';
import posterOne from '../assets/images/posters/Poster_01.png';
import logo from '../assets/images/logos/Logo.jpg';

import ApiFetcher from '../hooks/fetch';



const HomeContainer = styled.a`
    text-decoration: none;
`;

const Logo = styled.img`
    width: 32rem;
    position: fixed;
    top: 5rem;
    left: 6rem;
`;

const ImgBox = styled.div`
    height: 86vh;
`;

const TextBox = styled.div`
    height: 14vh;
    width: 100%;
    background-color: ${colors.primary};

    color: ${colors.base};
    font-weight: ${fontsWeights.bold};
    font-size: 5rem;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const PosterImage = styled.img`
    width: 100%;
`;

const Home = () => {

  return (
    <>
        <HomeContainer  href={ROUTES.DINE}>
            <Logo src={logo}/>
            <ImgBox>
                <PosterImage src={posterOne}/>
            </ImgBox>
            <TextBox>Tab the screen to order</TextBox>
        </HomeContainer>
    </>
  )
}

export default Home