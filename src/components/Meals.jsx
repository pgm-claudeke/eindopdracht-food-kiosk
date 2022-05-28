//display: grid;
//grid-template-columns: repeat(3, 1fr);

import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import useFetch from '../hooks/fetch';

const MealsContainer = styled.div`
    width: 74%;
    max-height: 90%;
    background-color: ${colors.secondary};
    border-radius: ${radius.main} 0rem 0rem ${radius.main};
    padding: 3rem 4rem;
`;

const MealsTitle = styled.p`
    color: ${colors.base};
    font-size: 5rem;
    font-weight: 900;
    margin-bottom: 4rem;
`;

const MealsList = styled.ul`
    list-style: none;
    overflow: scroll;

    display: grid;
    grid-template-columns: repeat(3, 33%);
    justify-items: start;
`;

const Meal = styled.li`
    color: ${colors.base};
    font-size: 2.5rem;
    font-weight: ${fontsWeights.bold};
    text-align: center;

    width: 18rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;

    margin-bottom: 2rem;
`;

const MealImageBox = styled.div`
    background-color: ${colors.base};
    width 16rem;
    height: 16rem;
    border-radius: ${radius.main};

    display: flex;
    justify-content: center; 
    align-items: center;
`;

const MealImage = styled.img`
    height: 70%;
    object-fit: cover;
    object-position: center;
`;

const Meals = ({category, filter}) => {
    const {data, loading, error} = useFetch('https://pgm-claudeke.github.io/eindopdracht-food-kiosk/meals.json');
    if (loading) return <h1>LOADING...</h1>
    if (error) console.log(error)


    const filteredData = data.filter(data => data.category === filter);
    console.log(filteredData)

  return (
    <MealsContainer>
        <MealsTitle>{category}</MealsTitle>
        <MealsList>
            {
                filteredData.map(data => {
                    const image = require("../assets/images/meals/" + data.image);
                    return(
                    <Meal key={data.id}>
                        <MealImageBox>
                            <MealImage src={image}/>
                        </MealImageBox>
                        <p>{data.label}</p>
                    </Meal>
                    )
                })
            }
        </MealsList>
    </MealsContainer>
  )
}

export default Meals