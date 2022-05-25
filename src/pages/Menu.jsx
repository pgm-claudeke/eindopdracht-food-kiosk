import React, {useState} from 'react'
import styled from 'styled-components';
import { Categories, Header, CurrentOrder, Meals } from '../components';
import useFetch from '../hooks/fetch';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 70vh;
`;

const Menu = () => {
    const [category, setCategory] = useState(null);
    const [menu, setMenu] = useState(null);
    const [filter, setFilter] = useState(null);

    const handleMenu = (e) => {
        setCategory(e.target.value);
        setFilter(e.target.value.toLowerCase())
    }

    console.log(filter)

  return (
    <>
        <Header/>
        <MenuContainer>
            <Categories handleMenu={handleMenu}></Categories>
            <Meals category={category} filter={filter}></Meals>
        </MenuContainer>
        <CurrentOrder/>
    </>
  )
}

export default Menu