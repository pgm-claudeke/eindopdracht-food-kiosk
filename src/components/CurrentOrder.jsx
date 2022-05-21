import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/styles';
import { FaChevronRight } from 'react-icons/fa';
import Button from './Button';

const OrderContainer = styled.section`
    height: 18vh;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: ${colors.secondaryLight};

    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 1.6rem;
`;

const OrderTitle = styled.div`
    background-color: ${colors.primary};
    color: ${colors.base};
    height: 20%;
    width: 100%;
    padding-left: 10%;

    text-transform: uppercase;
    font-weight: 900;
    font-size: 3rem;

    display: flex;
    align-items: center;
`;

const OrderBox = styled.div`
    height: 12.3rem; 
    width: 90%;
    background-color: ${colors.base};
    border: ${colors.secondary} solid 0.18rem;
    border-radius: 1.5rem;

    color: ${colors.primary};
    font-size: 3rem;
    font-weight: 600;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const OrderShowBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: baseline;
`;

const BtnBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
`;

const btnWidth = "49.5%"

const CurrentOrder = () => {
  return (
    <OrderContainer>
        <OrderTitle>
            <p>Your order</p>
        </OrderTitle>
        <OrderBox>
            <p>Total: € 2,00</p>
            <p>Amount: 1</p>
            <OrderShowBox>
                <p>Show order</p>
                <FaChevronRight style={{fontSize:"2rem"}}/>
            </OrderShowBox>
        </OrderBox>
        <BtnBox>
            <Button btnName="Cancel order" btnColor={colors.secondary} btnWidth={btnWidth}/>
            <Button btnName="Validate order" btnColor={colors.primary} btnWidth={btnWidth}/>
        </BtnBox>
    </OrderContainer>
  )
}

export default CurrentOrder