import React from 'react'
import styled from 'styled-components'
import { colors, fontsWeights, radius } from '../constants/styles';

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
    border-radius: ${radius.main};

    text-decoration: none;
    color: ${colors.base};
    font-size: 3rem;
    font-weight: ${fontsWeights.bold};
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    p {
        margin: 0;
    }
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
                {iconOne}
            </IconContainer>
            <p>{optionOne}</p>
        </Option>
        <Option href={linkTwo}>
            <IconContainer>
                {iconTwo}
            </IconContainer>
            <p>{optionTwo}</p>
        </Option>
    </Options>
  )
}

export default DineOption