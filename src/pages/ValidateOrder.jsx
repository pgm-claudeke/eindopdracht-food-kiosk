import React from 'react';
import styled from 'styled-components';
import { OrderQuestion, OrderList, OrderTotal } from '../components';
import { colors } from '../constants/styles';
import ROUTES from '../constants/routes';
import { motion } from 'framer-motion';
import { pageSwitch } from '../constants/animations';


const OrderContainer = styled(motion.div)`
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


const ValidateOrder = () => {
  return (
    <OrderContainer variants={pageSwitch} initial='hidden' animate='show' exit='exit'>
        <OrderBox>
            <OrderQuestion question='Is your order correct?'></OrderQuestion>
            <OrderList option={false}/>
        </OrderBox>
        <OrderTotal nav={ROUTES.PAY} navName="Pay"/>
    </OrderContainer>
  )
}

export default ValidateOrder