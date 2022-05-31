import React from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { colors, fontsWeights, radius } from '../constants/styles';

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

const Amount = styled.div`
    height: 5.6rem;
    min-width: 5.6rem;
    outline: ${colors.primary} solid 1px;
    outline-offset: -1px;
    background-color: ${colors.base};

    font-size: 3rem;
    font-weight: ${fontsWeights.bold};
    color: ${colors.tertiare};

    display: flex;
    align-items: center;
    justify-content: center;
`;

const AmountCounter = ({color}) => {
  return (
    <Container>
        <BtnSubtract style={{backgroundColor: color}}><FaMinus/></BtnSubtract>
        <Amount style={{outline: color}}>1</Amount>
        <BtnAdd style={{backgroundColor: color}}><FaPlus/></BtnAdd>
    </Container>
  )
}

export default AmountCounter