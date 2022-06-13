import React, { useEffect } from "react";
import scanAnimation from "../assets/lotties/lf30_editor_1osfp31i.json";
import Payment from "../components/Payment";
import { useNavigate } from 'react-router-dom'

const CodePayment = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/success')
        }, 6000)
    }, [navigate])
  return (
    <Payment lottieAni={scanAnimation}>Scan the code in the terminal</Payment>
  );
};

export default CodePayment;
