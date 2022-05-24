import React from 'react'
import styled from 'styled-components';
import { Categories, Header, CurrentOrder, Meals } from '../components';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 70vh;
`;

const Menu = () => {
  return (
    <>
        <Header/>
        <MenuContainer>
            <Categories></Categories>
            <Meals></Meals>
        </MenuContainer>
        <CurrentOrder/>
    </>
  )
}

export default Menu