import React from 'react'
import styled from 'styled-components';
import logoInverted from '../assets/images/logos/Logo_inverted.png';
import { colors, fontsWeights } from '../constants/styles';

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;

    color: ${colors.base};
    font-size: 5.6rem;
    font-weight: ${fontsWeights.bold};

    p {
        margin: 0;
    }
`;

const LogoImage = styled.img`
    width: 34rem;
`;

const OrderQuestion = ({question}) => {
  return (
    <QuestionContainer>
        <LogoImage src={logoInverted}/>
        <p>{question}</p>
    </QuestionContainer>
  )
}

export default OrderQuestion