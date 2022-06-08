import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import Meal from './Meal';
import { CgClose } from 'react-icons/cg';
import ButtonClose from './ButtonClose';
import { motion } from 'framer-motion';
import { containerMotion, boxMotion } from '../constants/animations';

const MealTypeContainer = styled(motion.div)`
    backdrop-filter: blur(12px)  grayscale(15%);
    height: 70.5vh;
    width: 100%;

    position: fixed;
    top: 19rem;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MealTypeBox = styled(motion.div)`
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

const MealType = ({handleClose, data, mealName, handleFunction}) => {
  return (
    <MealTypeContainer variants={containerMotion} initial="hidden" animate="show">
        <MealTypeBox variants={boxMotion} initial="hidden" animate="show">
            <ButtonClose handleClose={handleClose}/>
            <MealName>{mealName}</MealName>
            <TypesList>
                {
                    data.map(data => {
                        const image = require(`../assets/images/meals/${data.image}`);
                    
                        return(
                            <Meal key={data.name}  image={image} name={data.label} handleFunction={handleFunction} id={data.id}/>
                        )
                    })
                }
            </TypesList>
        </MealTypeBox>
        
    </MealTypeContainer>
  )
}

export default MealType