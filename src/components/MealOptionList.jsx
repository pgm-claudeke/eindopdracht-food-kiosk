import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights } from '../constants/styles';
import Meal from './Meal';
import useFetch from '../hooks/fetch';

const OptionContainer = styled.div`
`;

const OptionTitle = styled.p`
    color: ${colors.base};
    font-weight: ${fontsWeights.bold};
    font-size: 4rem;

    margin-bottom: 4rem;
`;

const List = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: row;

    width: 100%;
    overflow: scroll;
`;

const Chosen = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


const MealOptionList = ({title, filter}) => {
    const {data} = useFetch('https://pgm-claudeke.github.io/eindopdracht-food-kiosk/meals.json');
    const  optionsData = data.filter(data => data.category === filter);

    const [selected, setSelected] = useState(null)

    const handleChoice = (e) => {
        setSelected(e.target.id)
    }

  return (
    <OptionContainer>
        <OptionTitle>{title}</OptionTitle>
            <List> 
            {
                optionsData.map(option => {
                    const image = require(`../assets/images/meals/${option.image}`);

                    return(
                    <Meal handleFunction={handleChoice} key={option.id} scale="14rem" name={option.label} id={option.id} image={image} handleActive={selected === option.id}/>
                    )
                })
            }
            </List>
    </OptionContainer>
  )
}

export default MealOptionList