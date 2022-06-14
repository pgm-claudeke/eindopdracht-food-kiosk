import React, { useEffect } from "react";
import { Header, OrderOptions, Footer } from "../components";
import ROUTES from "../constants/routes";
import { GiKnifeFork } from "react-icons/gi";
import { RiShoppingBag2Line } from "react-icons/ri";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageSwitch } from "../constants/animations";
import { useNavigate } from "react-router-dom";

const LINKS = [
    {
        label: 'Dine in',
        icon: <GiKnifeFork />,
        route: ROUTES.MENU,
        key: "option_dine_in"
    },
    {
        label: 'Take out',
        icon: <RiShoppingBag2Line />,
        route: ROUTES.MENU,
        key: "option_take_out"
    },
]


const DineOptions = () => {
    const navigate = useNavigate();

    //useEffect(() => {
    //    setTimeout(() => {
    //        navigate(ROUTES.HOME);
    //    }, 60000 );
    //},[navigate])

    useEffect(() => {
        const idleTimer = setTimeout(()  => {
            navigate(ROUTES.HOME);
            }, 60000 );

      return () => {
        clearTimeout(idleTimer);
      }
    }, [])
    

  return (
    <motion.div variants={pageSwitch} initial='hidden' animate='show' exit='exit'>
        <Header/>
        <OrderOptions links={LINKS}/>
        <Footer/>
    </motion.div>
  );
};

export default DineOptions;
