import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights } from '../constants/styles';
import Button from './Button';
import ButtonLink from './ButtonLink';

const Container = styled.div`
    color: ${colors.base};
    font-size: 4.6rem;
    font-weight: ${fontsWeights.regular};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;

    width: 74rem;
    margin-bottom: 4rem;

    p {
        margin: 0;
    }
`;

const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const btnWidth = '49%';

const OrderTotal = () => {
  return (
    <Container>
        <p>Total: € 4,9</p>
        <BtnContainer>
            <ButtonLink href='/menu' btnColor={colors.secondary} btnWidth={btnWidth}>Go Back</ButtonLink>
            <ButtonLink href='/pay-options' btnColor={colors.secondary} btnWidth={btnWidth}>Pay</ButtonLink>
        </BtnContainer>
    </Container>
  )
}

export default OrderTotal