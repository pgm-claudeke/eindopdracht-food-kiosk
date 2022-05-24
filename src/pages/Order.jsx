import React from 'react';
import styled from 'styled-components';
import { Question, OrderList, OrderTotal } from '../components';
import { colors } from '../constants/styles';


const OrderContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${colors.primary};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const OrderBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    height: 80%;
`;


const Order = () => {
  return (
    <OrderContainer>
        <OrderBox>
            <Question question='Is your order compleet?'></Question>
            <OrderList/>
        </OrderBox>
        <OrderTotal/>
    </OrderContainer>
    
  )
}

export default Order