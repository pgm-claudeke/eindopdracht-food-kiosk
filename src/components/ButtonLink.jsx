import React, { Children } from 'react'
import styled from 'styled-components'
import { colors, radius } from '../constants/styles';

const Btn = styled.a`
    text-decoration: none;
    border-radius: ${radius.main};
    height: 5.6rem;

    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.base};

    display: flex;
    justify-content: center; 
    align-items: center;
`;

const ButtonLink = ({children, btnColor, btnWidth, href}) => {
  return (
    <Btn href={href} style={{backgroundColor:btnColor, width:btnWidth}}>
        {children}
    </Btn>
  )
}

export default ButtonLink