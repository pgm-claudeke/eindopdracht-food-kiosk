import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants/styles';

const Btn = styled.button`
    border: none;
    border-radius: 0.6rem;
    height: 5.6rem;

    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.base}
`;

const Button = ({btnName, btnColor, btnWidth}) => {
  return (
    <Btn style={{backgroundColor:btnColor, width:btnWidth}}>
        {btnName}
    </Btn>
  )
}

export default Button