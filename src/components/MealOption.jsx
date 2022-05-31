import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import AmountCounter from './AmountCounter';
import Button from './Button';
import Meal from './Meal';

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
    gap: 8rem;
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

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    align-items: center;
    justify-content: center;
`;

const btnwidth = "18rem";

const OptionContainer = styled.div`
`;

const OptionList = styled.ul`
    list-style: none;
    padding-left: 0;
`

const MealOption = ({data, handleCancel}) => {
    const mealData = data;
    console.log(mealData.options);

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
            <OptionContainer>
                <OptionList>
                    <Meal scale="12rem">

                    </Meal>
                </OptionList>
            </OptionContainer>
            <ButtonContainer>
                <Button btnColor={colors.secondary} handleFunction={handleCancel} btnWidth={btnwidth}>Cancel</Button>
                <AmountCounter color={colors.secondary}/>
                <Button btnColor={colors.secondary} btnWidth={btnwidth}>Add</Button>
            </ButtonContainer>
        </MealOptionBox>
    </MealOptionContainer>
  )
}

export default MealOption