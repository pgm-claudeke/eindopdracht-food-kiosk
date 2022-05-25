//display: grid;
//grid-template-columns: repeat(3, 1fr);

import React from 'react';
import styled from 'styled-components';
import { colors, radius } from '../constants/styles';
import useFetch from '../hooks/fetch';

const MealsContainer = styled.div`
    width: 70%;
    height: fit-content;
    background-color: ${colors.secondary};
    border-radius: ${radius.main} 0rem 0rem ${radius.main};
    padding: 2.8rem;

`;

const MealsTitle = styled.p`
    color: ${colors.base};
    font-size: 5rem;
    font-weight: 900;
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
        <ul>
            {
                filteredData.map(data => 
                    <li key={data.name}>{data.name}</li>
                )
            }
        </ul>
    </MealsContainer>
  )
}

export default Meals