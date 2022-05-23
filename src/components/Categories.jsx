import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/styles';
import tenders from '../assets/images/categories/chicken_tenders.png'


const CategoryList = styled.ul`
    list-style: none; 
    padding-left: 0;
`;

const CategoryItem = styled.li`

`;

const CategoryBtn = styled.button`
    min-height: 13.3rem;
    width: 22rem;
    background-color: ${colors.primary};
    border: none;
    border-radius: 0rem 1rem 1rem 0rem;
    padding: 0;
    margin: 0;

    color: ${colors.base};
    font-size: 1.6rem;
    font-weight: 600;
`;

const CategoryContainer = styled.div`
    margin-left: 6.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CategoryImage = styled.img`
    width: 9rem;
`;

const Categories = () => {
  return (
    <CategoryList>
        <CategoryItem>
            <CategoryBtn>
                <CategoryContainer>
                    <CategoryImage src={tenders}/>
                    Tenders
                </CategoryContainer>
            </CategoryBtn>
        </CategoryItem>
    </CategoryList>
  )
}

export default Categories