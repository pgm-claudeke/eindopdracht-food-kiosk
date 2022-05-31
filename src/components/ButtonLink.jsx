import React, { Children } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { colors, radius } from '../constants/styles';

const Btn = styled(Link)`
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

    padding: 0 2rem;
`;

const ButtonLink = ({children, btnColor, btnWidth, link}) => {
  return (
    <Btn to={link} style={{backgroundColor:btnColor, width:btnWidth}}>
        {children}
    </Btn>
  )
}

export default ButtonLink