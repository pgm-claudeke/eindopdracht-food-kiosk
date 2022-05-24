//display: grid;
//grid-template-columns: repeat(3, 1fr);

import React from 'react';
import styled from 'styled-components';
import { colors, radius } from '../constants/styles';

const MealsContainer = styled.div`
    width: 70%;
    height: fit-content;
    background-color: ${colors.secondary};
    border-radius: ${radius.main} 0rem 0rem ${radius.main};
    padding: 2.8rem;

`;

const MealsTitle = styled.p`
    color: ${colors.base};
    font-size: 5rem;
    font-weight: 900;
`;

const Meals = () => {
  return (
    <MealsContainer>
        <MealsTitle>Tenders</MealsTitle>
    </MealsContainer>
  )
}

export default Meals