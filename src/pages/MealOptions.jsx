import React from 'react';
import styled from 'styled-components';
import { MealOption } from '../components';
import { radius, colors, fontsWeights } from '../constants/styles';
import { Button } from '../components';

const MealOptionContainer = styled.div`
    background-color: ${colors.primary};
    height: 100vh;
    width: 100%;
    padding: 4rem;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    gap: 6rem;
    color: ${colors.base};
`;

const MealInfo = styled.div`
    background-color: ${colors.base};
    border-radius: ${radius.main};
    padding: 0rem 4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MealImageBox = styled.div`
    height: 16rem;
    width: 16rem;
`;

const MealImage = styled.image`
    height: 70%;
    object-fit: cover;
    object-position: center;
`;

const MealName = styled.p`
    font-size: 4rem;
    font-weight: ${fontsWeights.bold};
    color: ${colors.secondary};
`;



const  ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;

    position: fixed;
    left: 4rem;
    bottom: 4rem;
`;

const MealOptions = () => {
  return (
    <MealOptionContainer>
    <MealInfo>
        <MealImageBox>
            <MealImage src=""/>
        </MealImageBox>
        <MealName>6 Piece Bucket</MealName>
    </MealInfo>
    <MealOption>

    </MealOption>
    <ButtonsContainer>
        <Button btnColor={colors.secondary}>Add</Button>
        <Button btnColor={colors.secondary}>Cancel</Button>
    </ButtonsContainer>
</MealOptionContainer>
  )
}

export default MealOptions