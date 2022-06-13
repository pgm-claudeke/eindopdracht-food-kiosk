import React from "react";
import { Header, OrderOptions, Footer } from "../components";
import ROUTES from "../constants/routes";
import { GiKnifeFork } from "react-icons/gi";
import { RiShoppingBag2Line } from "react-icons/ri";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageSwitch } from "../constants/animations";

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

const Page = styled(motion.div)`
`;


const DineOptions = () => {
  return (
    <Page>
      <Header />
      <OrderOptions links={LINKS}/>
      <Footer />
    </Page>
  );
};

export default DineOptions;
