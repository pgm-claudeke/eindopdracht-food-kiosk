import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants/styles';
import { GiKnifeFork } from 'react-icons/gi';
import { RiShoppingBag2Line } from 'react-icons/ri';


const Options = styled.div` 
    height: 81vh;
    margin: 0rem 6.25rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Option = styled.a`
    height: 36rem;
    width: 33rem;
    background-color: ${colors.primary};
    border-radius: 1.5rem;

    text-decoration: none;
    color: ${colors.base};
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const IconContainer = styled.div`
    font-size: 18rem;
    height: 18rem;
`;

const DineOption = ({optionOne, optionTwo, iconOne, iconTwo, linkOne, linkTwo}) => {
  return (
    <Options>
        <Option href={linkOne}>
            <IconContainer>
                <GiKnifeFork/>
            </IconContainer>
            <p>{optionOne}</p>
        </Option>
        <Option href={linkTwo}>
            <IconContainer>
                <RiShoppingBag2Line/>
            </IconContainer>
            <p>{optionTwo}</p>
        </Option>
    </Options>
  )
}

export default DineOption