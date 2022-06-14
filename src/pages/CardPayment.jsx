import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../App';
import scanAnimation from '../assets/lotties/79187-card-payment-success.json';
import Payment from '../components/Payment';
import { motion } from 'framer-motion';
import { pageSwitch } from '../constants/animations';


const CardPayment = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/success')
        }, 6000);
    }, [navigate]);

  return (
      <motion.div variants={pageSwitch} initial='hidden' animate='show'>
          <Payment lottieAni={scanAnimation}>Follow the instruction of the terminal</Payment>
      </motion.div>
  )
}

export default CardPayment