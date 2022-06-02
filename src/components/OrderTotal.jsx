import React from 'react';
import styled from 'styled-components';
import ROUTES from '../constants/routes';
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

const OrderTotal = ({nav, navName}) => {
  return (
    <Container>
        <p>Total: € 4,9</p>
        <BtnContainer>
            <ButtonLink link={ROUTES.MENU} btnColor={colors.secondary} btnWidth={btnWidth}>Go Back</ButtonLink>
            <ButtonLink link={nav} btnColor={colors.secondary} btnWidth={btnWidth}>{navName}</ButtonLink>
        </BtnContainer>
    </Container>
  )
}

export default OrderTotal