import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';

const MealContainer = styled.li`

`;

const MealBtn = styled.button`
    background-color: transparent;
    border: none; 

    color: ${colors.base};
    font-size: 2.5rem;
    font-weight: ${fontsWeights.bold};
    text-align: center;

    width: 18rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;

    > * {
        pointer-events: none;
    }
`;

const MealImageBox = styled.div`
    background-color: ${colors.base};
    width 16rem;
    height: 16rem;
    border-radius: ${radius.main};

    display: flex;
    justify-content: center; 
    align-items: center;

    overflow: hidden;
`;

const MealImage = styled.img`
    height: 70%;
    object-fit: cover;
    object-position: center;
`;

const Meal = ({key, image, name, handleMealType, id}) => {
  return (
    <MealContainer>
        <MealBtn key={key} onClick={handleMealType} id={id}>
            <MealImageBox>
                <MealImage src={image}/>
            </MealImageBox>
            {name}
        </MealBtn>
    </MealContainer>
  )
}

export default Meal