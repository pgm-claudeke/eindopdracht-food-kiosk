import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/styles';
import ROUTES from '../constants/routes';

const HeaderContainer = styled.header`
    background-color: ${colors.primary};
    height: 11vh;
    border-bottom: ${colors.secondary} solid 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
    
    </HeaderContainer>
  )
}

export default Header