import React from 'react';
import styled from 'styled-components';
import { colors, radius } from '../constants/styles';

const MealTypeContainer = styled.div`
    backdrop-filter: blur(20px);
    height: 70vh;
    width: 100%;

    position: fixed;
    top: 19rem;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MealList = styled.ul`
    height: 20rem;
    width: 70rem;
    border-radius: ${radius.main};
    background-color: ${colors.primary};
`;

const MealType = () => {
  return (
    <MealTypeContainer>
        <MealList>

        </MealList>
    </MealTypeContainer>
  )
}

export default MealType