import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.button`

`;

const CategoryList = styled.ul`

`;

const CategoryItem = styled.li`

`;

const Categories = () => {
  return (
    <CategoryList>
        <CategoryItem>
            <CategoryContainer>
                Tenders
            </CategoryContainer>
        </CategoryItem>
    </CategoryList>
  )
}

export default Categories