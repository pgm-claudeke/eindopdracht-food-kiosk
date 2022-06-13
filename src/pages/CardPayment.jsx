import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../App';
import scanAnimation from '../assets/lotties/79187-card-payment-success.json';
import Payment from '../components/Payment';


const CardPayment = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/success')
        }, 6000);
    }, [navigate]);

  return (
        <Payment lottieAni={scanAnimation}>Follow the instruction of the terminal</Payment>
  )
}

export default CardPayment