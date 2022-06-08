import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights } from '../constants/styles';
import Button from './Button';
import AmountCounter from './AmountCounter';
import { ShoppingCartContext } from '../App';
import { FaTrashAlt } from 'react-icons/fa';

const ListContainer = styled.ul`
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ListItem = styled.li`
    width: 76rem;

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
    gap: 2rem;
`;

const OrderList = ({option}) => {
    const [cart, setCart] = useContext(ShoppingCartContext); 
    const options = option;

    const deleteMeal = (e) => {
        console.log(e.target.value)
        const cartData = Object.values(cart);
        console.log(cartData)
    }

  return (
    <ListContainer>
        {
            Object.values(cart).map(meal => {

                const options = meal.options;
                console.log(options)

            return (
            <ListItem key={meal.orderId}>
                <OrderInfoBox>
                    <OrderInfo>
                        <p>{meal.amount}x</p>
                        <p>{meal.name}</p>
                    </OrderInfo>
                    <p>€ {meal.price}</p>
                </OrderInfoBox>
                { options &&
                    <OrderOptions>
                        <AmountCounter meal={meal}/>
                        <Button btnColor={colors.primary} handleFunction={deleteMeal} value={meal.orderId}><FaTrashAlt style={{marginTop: '0.5rem'}}/></Button>
                    </OrderOptions>
                }
            </ListItem>)
            }
            )

        }
    </ListContainer>
  )
}

export default OrderList