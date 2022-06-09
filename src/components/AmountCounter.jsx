import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { colors, fontsWeights, radius } from '../constants/styles';
import { CurrentCount, ShoppingCartContext } from '../App';

const Container = styled.div`
    display: flex;
    flex-direction: row;

`;

const BtnAdd = styled.button`
    font-size: 2.5rem;
    color: ${colors.base};

    background-color: ${colors.primary};
    border: none;
    height: 5.6rem;
    width: 5.6rem;
    border-radius: 0rem ${radius.main} ${radius.main} 0rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const BtnSubtract = styled.button`
    font-size: 2.5rem;
    color: ${colors.base};

    background-color: ${colors.primary};
    border: none;
    height: 5.6rem;
    width: 5.6rem;
    border-radius: ${radius.main} 0rem  0rem ${radius.main};

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Amount = styled.input`
    height: 5.6rem;
    width: 5.6rem;
    outline: ${colors.primary} solid 1px;
    outline-offset: -1px;
    background-color: ${colors.base};
    border: none;

    font-size: 3rem;
    font-weight: ${fontsWeights.bold};
    color: ${colors.tertiare};

    text-align: center;
`;

const AmountCounter = ({color, defaultAmount = 1, meal}) => {
    const [cart, setCart] = useContext(ShoppingCartContext);
    //const selectedMeal = Object.values(cart).find(cart => cart.orderId === meal.orderId);
    const [count, setCount] = useState(meal ? meal.amount : defaultAmount);
    const [amountMeal, setAmountMeal] = useContext(CurrentCount);
    
    const mealData = meal;

    const  handleAdd = () => {
        setCount(count + 1)
    };

    const  handleSubtract = (e) => {
        setCount(count - 1)

        if (count <= 1) {
            setCount(0);
        }
    };

    const setAmount = (e) => {
        setAmountMeal(e.target.value)

        if (mealData) {
            setCart({
            [mealData.orderId]: {
                amount: e.target.value
            }
            })
        }
        
    }

    setAmountMeal(count);

  return (
      
    <Container>
        <BtnSubtract style={{backgroundColor: color}} onClick={handleSubtract}><FaMinus/></BtnSubtract>
        <Amount type="number" value={count} style={{outline: color}} onChange={setAmount}/>
        <BtnAdd style={{backgroundColor: color}} onClick={handleAdd}><FaPlus/></BtnAdd>
    </Container>
  )
}

export default AmountCounter