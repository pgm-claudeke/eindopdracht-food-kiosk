import React from 'react';
import styled from 'styled-components';
import { fontsWeights } from '../constants/styles'
import Meal from './Meal';

const MealOptions = styled.div`
`;

const OptionName = styled.p`
    font-size: 3rem;
    font-weight: ${fontsWeights.bold};
    margin-bottom: 2rem;
`;

const OptionsList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1.5rem;
`;

const MealOption = () => {
  return (
    <MealOptions>
        <OptionName>Choose your sauce</OptionName>
        <OptionsList>
            <Meal name="ketchup"/>
            <Meal name="ketchup"/>
            <Meal name="ketchup"/>
            <Meal name="ketchup"/>
        </OptionsList>
    </MealOptions>
  )
}

export default MealOption