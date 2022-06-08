import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import AmountCounter from './AmountCounter';
import Button from './Button';
import MealDrinks from './MealDrinks';
import MealSauces from './MealSauces';
import MealSides from './MealSides';
import ButtonClose from './ButtonClose';
import { CurrentCount, ShoppingCartContext } from '../App';
import { motion } from 'framer-motion';
import { containerMotion } from '../constants/animations';

const MealOptionContainer = styled(motion.div)`
    backdrop-filter: blur(12px)  grayscale(15%);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0rem;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MealOptionBox = styled(motion.div)`
    background-color: ${colors.primary};
    border-radius: ${radius.main};
    max-height: 94%;
    width: 92%;
    position: relative;

    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const MealInfoContainer = styled.div`
    background-color: ${colors.base};
    border-radius: ${radius.main};

    color: ${colors.secondary};
    padding: 4rem 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8rem;
`;

const MealImageBox = styled.div`
    height: 14rem;
    width: 14rem;
`;

const MealImage = styled.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const MealInfoBox = styled.div`
`;

const MealName = styled.p`
    font-size: 4rem;
    font-weight: ${fontsWeights.bold};
    margin-bottom: 1rem;
`;

const MealPrice = styled.p`
    font-size: 2.5rem;
    font-weight: ${fontsWeights.regular};
`;

const ButtonContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    gap: 4rem;
    align-items: center;
    justify-content: center;
`;

const btnwidth = "18rem";

const OptionContainer = styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ::-webkit-scrollbar {
        width: 20px
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${colors.secondary};
        border-radius: ${radius.main}
    }
`;


const boxMotion = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.35,
            duration: 0.4
        }
    }
}



const MealOptions = ({data, handleClose, mealInfo}) => {
    const [cart, setCart] = useContext(ShoppingCartContext); 
    const [amount] = useContext(CurrentCount);

    const mealData = data;
    const options = mealData.options;

    const image = require(`../assets/images/meals/${mealData.image}`);

    const handleCart = () => {
        setCart({
            ...cart,
            [mealInfo.id]: {
                id: mealInfo.id,
                name: mealInfo.name,
                price: mealInfo.price,
                amount: amount,
            }
        })
    }

  return (
    <MealOptionContainer variants={containerMotion} initial="hidden" animate="show">
        <MealOptionBox variants={boxMotion} initial="hidden" animate="show"> 
            <ButtonClose handleClose={handleClose}/>
            <MealInfoContainer>
                <MealImageBox>
                    <MealImage src={image}/>
                </MealImageBox>
                <MealInfoBox>
                    <MealName>{mealData.name}</MealName>
                    <MealPrice>€ {mealData.price}</MealPrice>
                </MealInfoBox>
            </MealInfoContainer>
            {
                options && 
                <OptionContainer>
                {
                    options.side &&
                    <MealSides/>
                }
                {
                    options.sauce !== 0 ?
                    [...Array(options.sauce)].map((sauce, index) => {
                        return(
                            <MealSauces key={index} title={`Choose sauce ${index + 1}`}/>
                        )
                    })
                    :
                    <></>
                }
                {
                    options.drink &&
                    <MealDrinks/>
                }
                </OptionContainer>
            }
            <ButtonContainer>
                <AmountCounter color={colors.secondary}/>
                <Button btnColor={colors.secondary} btnWidth={btnwidth} handleFunction={handleCart}>Add</Button>
            </ButtonContainer>
        </MealOptionBox>
    </MealOptionContainer>
  )
}

export default MealOptions