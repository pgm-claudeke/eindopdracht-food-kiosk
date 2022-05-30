import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, radius } from '../constants/styles';
import Meal from './Meal';
import { CgClose } from 'react-icons/cg';

const MealTypeContainer = styled.div`
    backdrop-filter: blur(12px);
    height: 69vh;
    width: 100%;

    position: fixed;
    top: 19rem;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MealsList = styled.ul`
    min-height: 20rem;
    width: 70rem;
    border-radius: ${radius.main};
    background-color: ${colors.primary};
    padding: 2rem;

    list-style: none;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
`;

const CloseBtn = styled.button`
    background-color: ${colors.secondary};
    border-radius: ${radius.main}; 
    border: none; 
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

const MealType = ({handleClose, data}) => {
  return (
    <MealTypeContainer>
        <MealsList>
            <CloseBtn>
                <CgClose onClick={handleClose}/>
            </CloseBtn>
            {
                data.map(data => {
                    const image = require("../assets/images/meals/" + data.image);

                    return(
                        <Meal key={data.name}  src={image} name={data.label}/>
                    )
                })
            }
        </MealsList>
    </MealTypeContainer>
  )
}

export default MealType