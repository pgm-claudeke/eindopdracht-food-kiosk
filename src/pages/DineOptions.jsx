import React from "react";
import { Header, DineOption, Footer } from "../components";
import ROUTES from "../constants/routes";
import { GiKnifeFork } from "react-icons/gi";
import { RiShoppingBag2Line } from "react-icons/ri";

const LINKS = [
    {
        label: 'Dine in',
        icon: <GiKnifeFork />,
        route: ROUTES.MENU
    },
    {
        label: 'Take out',
        icon: <RiShoppingBag2Line />,
        route: ROUTES.MENU
    },
]

const DineOptions = () => {
  return (
    <>
      <Header />
      <DineOption links={LINKS}/>
      <Footer />
    </>
  );
};

export default DineOptions;
