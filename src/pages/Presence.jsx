import React from 'react';
import styled from 'styled-components';
import { colors, radius } from '../constants/styles';

const  Container = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed; 
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-content: center;

    background-color: ${colors.primary};
`;

const Modal = styled.div`
    width: 40rem;
    height: 20rem;
    background-color: ${colors.base};
    border-radius: ${radius.main};
`;

const ButtonContainer = styled.div`

`;

const Presence = () => {
  return (
    <Container>
        <Modal>
            <ButtonContainer>

            </ButtonContainer>
        </Modal>
    </Container>
  )
}

export default Presence