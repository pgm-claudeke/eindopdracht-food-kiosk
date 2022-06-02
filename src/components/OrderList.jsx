import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights } from '../constants/styles';
import Button from './Button';
import AmountCounter from './AmountCounter';

const ListContainer = styled.ul`
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
`;

const ListItem = styled.li`
    width: 69rem;

    background-color: ${colors.base};
    padding: 3.3rem;
    border-radius: 1.5rem;
`;

const OrderInfoBox = styled.div`
    color: ${colors.tertiare};
    font-size: 3rem;
    font-weight: ${fontsWeights.bold};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    border-bottom: solid ${colors.primary} 2px;

    p {
        margin: 0;
        line-height: 2.2;
    }
`;

const OrderInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

const OrderOptions = styled.div`
    margin-top: 3rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const btnWidth = "30%"

const OrderList = ({option}) => {
    const options = option;
  return (
    <ListContainer>
        <ListItem>
                <OrderInfoBox>
                    <OrderInfo>
                        <p>1x</p>
                        <p>Chicken Wrap</p>
                    </OrderInfo>
                    <p>€ 2,45</p>
                </OrderInfoBox>
                { options &&
                    <OrderOptions>
                        <Button btnWidth={btnWidth} btnColor={colors.secondary}>Edit</Button>
                        <AmountCounter></AmountCounter>
                        <Button btnWidth={btnWidth} btnColor={colors.primary}>Delete</Button>
                    </OrderOptions>
                }
                
        </ListItem>
    </ListContainer>
  )
}

export default OrderList