//display: grid;
//grid-template-columns: repeat(3, 1fr);

import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import useFetch from '../hooks/fetch';
import logo from '../assets/images/logos/Logo.jpg';
import Meal from './Meal';
import MealType from './MealType';
import { motion } from "framer-motion"

const MealsContainer = styled(motion.div)`
    overflow: hidden;
    width: 74%;
    max-height: 90%;
    background-color: ${colors.secondary};
    border-radius: ${radius.main} 0rem 0rem ${radius.main};
    padding: 3rem 4rem;
`;

const MealsTitle = styled.p`
    color: ${colors.base};
    font-size: 5rem;
    font-weight: ${fontsWeights.bold};
    margin-bottom: 4rem;
`;

const MealsList = styled.ul`
    list-style: none;

    display: grid;
    grid-template-columns: repeat(3, 33%);
    justify-items: start;
    row-gap: 2rem;
`;

const Meals = ({category, filter, handleFunction}) => {
    const {data, loading, error} = useFetch('https://pgm-claudeke.github.io/eindopdracht-food-kiosk/meals.json');
    if (loading) return <h1>LOADING...</h1>
    if (error) console.log(error)

    const filteredData = data.filter(data => data.category === filter);
    console.log(filteredData)

  return (
    <MealsContainer initial={{x: '100rem'}} animate={{x: 0}} transition={{duration: 0.2, delay: 0.2, type: 'spring', stiffness: 20}}>
        <MealsTitle>{category}</MealsTitle>
        <MealsList>
            {
                filteredData.map(data => {
                    const image = require(`../assets/images/meals/${data.image}`);

                    if(!image) {
                        return logo
                    }

                    return(
                    <Meal key={data.id} image={image}  name={data.label} handleFunction={handleFunction} id={data.id}/>
                    )
                })
            }
        </MealsList>
    </MealsContainer>
  )
}

export default Meals