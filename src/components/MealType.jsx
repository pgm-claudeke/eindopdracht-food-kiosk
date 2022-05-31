import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import Meal from './Meal';
import { CgClose } from 'react-icons/cg';

const MealTypeContainer = styled.div`
    backdrop-filter: blur(12px)  grayscale(15%);
    height: 69vh;
    width: 100%;

    position: fixed;
    top: 19rem;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MealTypeBox = styled.div`
    min-height: 20rem;
    min-width: 20rem;
    border-radius: ${radius.main};
    background-color: ${colors.primary};
    color: ${colors.base};
    position: absolute;
    padding: 4rem;
`;

const MealName = styled.p`
    font-size: 4rem;
    font-weight: ${fontsWeights.bold};
    margin-bottom: 4rem;
    background-color: ${colors.secondary};
    border-radius: ${radius.main};
    padding: 1rem 1.5rem;
    width: fit-content;
`;

const TypesList = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
`;

const CloseBtn = styled.button`
    background-color: ${colors.secondary};
    border-radius: ${radius.main}; 
    border: solid ${colors.base} 0.25rem; 
    position: absolute;
    top: -1.8rem;
    right: -1.8rem;
    padding: 0.4rem;

    font-size: 3.5rem;
    color: ${colors.base};

    display: flex;
    justify-content: center; 
    align-items: center;
`;

const MealType = ({handleClose, data, mealName, handleFunction}) => {
  return (
    <MealTypeContainer>
        <MealTypeBox>
            <CloseBtn>
                <CgClose onClick={handleClose}/>
            </CloseBtn>
            <MealName>{mealName}</MealName>
            <TypesList>
                {
                    data.map(data => {
                        const image = require(`../assets/images/meals/${data.image}`);
                        console.log(image);
                    
                        return(
                            <Meal key={data.name}  image={image} name={data.label} handleFunction={handleFunction}/>
                        )
                    })
                }
            </TypesList>
        </MealTypeBox>
        
    </MealTypeContainer>
  )
}

export default MealType