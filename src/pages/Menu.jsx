import React from 'react'
import styled from 'styled-components';
import { Categories, Header, CurrentOrder } from '../components';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 70vh;
`;

const Menu = () => {
  return (
    <>
        <Header/>
        <MenuContainer>
            <Categories></Categories>
        </MenuContainer>
        <CurrentOrder/>
    </>
  )
}

export default Menu