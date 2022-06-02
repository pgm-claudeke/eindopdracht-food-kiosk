import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

const MealContainer = styled.li`

`;

const MealBtn = styled.button`
    background-color: transparent;
    border: none; 

    color: ${colors.base};
    font-size: 2rem;
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

const Meal = ({image, name, handleFunction, id, scale}) => {
  return (
    <MealContainer>
        <MealBtn onClick={handleFunction} id={id}>
            <MealImageBox style={{height: scale, width: scale}}>
                <MealImage src={image}/>
            </MealImageBox>
            {name}
        </MealBtn>
    </MealContainer> 
  )
}

export default Meal