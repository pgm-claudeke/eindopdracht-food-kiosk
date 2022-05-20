import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants/styles';
import { GiKnifeFork } from 'react-icons/gi';
import { RiShoppingBag2Line } from 'react-icons/ri';
import ROUTES from '../constants/routes';

const Options = styled.div` 
    height: 82vh;
    margin: 0rem 6.25rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Option = styled.a`
    height: 32rem;
    width: 29rem;
    background-color: ${colors.primary};
    border-radius: 1.5rem;

    text-decoration: none;
    color: ${colors.base};
    font-size: 18rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DineOption = () => {
  return (
    <Options>
        <Option href={ROUTES.MENU}>
            <GiKnifeFork/>
        </Option>
        <Option href={ROUTES.MENU}>
            <RiShoppingBag2Line/>
        </Option>
    </Options>
  )
}

export default DineOption