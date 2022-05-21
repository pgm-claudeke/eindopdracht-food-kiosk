import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/styles';

const HeaderContainer = styled.header`
    background-color: ${colors.primary};
    height: 12vh;
    border-bottom: ${colors.secondary} solid 1.25rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LogoContainer = styled.div`
    color: #fff;
    font-size: 5rem;
    font-weight: 900;

    width: 40%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const CommercialContainer = styled.div`
    background-color: #fff;
    height: 100%;
    width: 60%;

    border-radius: 10rem 0rem 0rem 10rem;
    box-shadow: -6px 0px 16px 0px rgba(0,0,0,0.16);
`;

const Header = () => {
  return (
    <HeaderContainer>
        <LogoContainer>
            <p>Jollibee</p>
        </LogoContainer>
        
        <CommercialContainer>

        </CommercialContainer>
    </HeaderContainer>
  )
}

export default Header