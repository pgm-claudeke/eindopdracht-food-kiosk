import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import AmountCounter from './AmountCounter';

const MealOptionContainer = styled.div`
    backdrop-filter: blur(12px)  grayscale(15%);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0rem;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MealOptionBox = styled.div`
    background-color: ${colors.primary};
    border-radius: ${radius.main};
    max-height: 94%;
    width: 92%;

    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const MealInfoContainer = styled.div`
    background-color: ${colors.base};
    border-radius: ${radius.main};

    color: ${colors.secondary};
    padding: 4rem 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6rem;
`;

const MealImageBox = styled.div`
    height: 14rem;
    width: 14rem;
`;

const MealImage = styled.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const MealInfoBox = styled.div`
`;

const MealName = styled.p`
    font-size: 4rem;
    font-weight: ${fontsWeights.bold};
    margin-bottom: 1rem;
`;

const MealPrice = styled.p`
    font-size: 2.5rem;
    font-weight: ${fontsWeights.regular};
`;

const MealOption = ({data}) => {
    const mealData = data;
    console.log(mealData.image);

    const image = require(`../assets/images/meals/${mealData.image}`);

  return (
    <MealOptionContainer>
        <MealOptionBox>
            <MealInfoContainer>
                <MealImageBox>
                    <MealImage src={image}/>
                </MealImageBox>
                <MealInfoBox>
                    <MealName>{mealData.name}</MealName>
                    <MealPrice>€ {mealData.price}</MealPrice>
                </MealInfoBox>
            </MealInfoContainer>

            <AmountCounter color={colors.secondary}/>
        </MealOptionBox>
    </MealOptionContainer>
  )
}

export default MealOption