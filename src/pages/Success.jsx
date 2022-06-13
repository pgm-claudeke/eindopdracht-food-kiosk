import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import succesAnimation from '../assets/lotties/lf30_editor_qicv165r.json';
import logoInverted from '../assets/images/logos/Logo_inverted.png';
import styled from 'styled-components';
import { colors } from '../constants/styles';
import { OrderQuestion } from '../components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    background-color: ${colors.primary};
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6rem;
`;

const textBox = styled(motion.div)`
`;

const opacityMotion = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {

        }
    }
}

const Success = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: succesAnimation,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
            localStorage.removeItem("cart")
        }, 6000);
    }, [navigate])

  return (
    <Container>
        <OrderQuestion question="Payment succefull."/>
        <Lottie options={defaultOptions} height={800} width={800}/>
    </Container>
  )
}

export default Success