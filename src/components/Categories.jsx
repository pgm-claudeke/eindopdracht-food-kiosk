import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import tenders from '../assets/images/categories/chicken_tenders.png';
import useFetch from '../hooks/fetch';


const CategoryList = styled.ul`
    width: 20%;
    list-style: none; 
    padding-left: 0;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 90%;

    overflow: scroll;
`;

const CategoryItem = styled.li`

`;

const CategoryBtn = styled.button`
    min-height: 13.3rem;
    width: 98%;
    background-color: ${colors.primary};
    border: none;
    border-radius: 0rem ${radius.main} ${radius.main} 0rem;
    padding: 0rem 0rem 2rem 0rem;
    margin: 0;

    color: ${colors.base};
    font-size: 2rem;
    font-weight: ${fontsWeights.bold};

    p {
        margin: 0;
    }

    > * {
        pointer-events: none;
    }
`;

const CategoryContainer = styled.div`
    margin: 0rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CategoryImage = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center;
`;

const ImageContainer = styled.div`
    width: 9.6rem;
    height: 8.25rem;
    overflow: hidden; 
`;



const Categories = ({handleMenu}) => {
    const { data, loading, error } = useFetch('https://pgm-claudeke.github.io/eindopdracht-food-kiosk/categories.json');

    if (loading) return <h1>LOADING...</h1>

    if (error) console.log(error)

  return (
    <CategoryList>
        {
            data.map(data => {
            const image = require('../assets/images/categories/' + data.image)
            
            return(
            <CategoryItem key={data.name}>
                <CategoryBtn onClick={handleMenu} value={data.name}>
                    <CategoryContainer>
                        <ImageContainer>
                            <CategoryImage src={image}/>
                        </ImageContainer>
                        <p>{data.name}</p>
                    </CategoryContainer>
                </CategoryBtn>
            </CategoryItem>
            )
            })
        }
        
    </CategoryList>
  )
}

export default Categories