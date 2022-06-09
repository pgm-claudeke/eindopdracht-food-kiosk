import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights } from '../constants/styles';
import Meal from './Meal';
import useFetch from '../hooks/fetch';
import API from '../constants/api';
import { CurrentOptions } from '../App';

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
    flex-wrap: wrap;

    width: 100%;
`;

const MealOptionList = ({title, filter}) => {
    const {data} = useFetch(API.MEALS);
    const  optionsData = data.filter(data => data.category === filter);

    const [selectedOption ,setSelectedOption] = useContext(CurrentOptions);


    const [selected, setSelected] = useState(null) 

    const handleChoice = (e) => {
        setSelected(e.target.id)
        setSelectedOption({
            ...selectedOption,
            option: {
                id: e.target.id,
                name: e.target.value
            }
        })
    }

  return (
    <OptionContainer>
        <OptionTitle>{title}</OptionTitle>
            <List> 
            {
                optionsData.map(option => {
                    const image = require(`../assets/images/meals/${option.image}`);

                    return(
                    <Meal handleFunction={handleChoice} key={option.id} scale="14rem" name={option.label} id={option.id} image={image} handleActive={selected === option.id} value={option.name}/>
                    )
                })
            }
            </List>
    </OptionContainer>
  )
}

export default MealOptionList