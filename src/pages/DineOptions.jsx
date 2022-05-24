import React from 'react';
import { Header, DineOption, Footer } from '../components';
import ROUTES from '../constants/routes';
import { GiKnifeFork } from 'react-icons/gi';
import { RiShoppingBag2Line } from 'react-icons/ri';

const DineOptions = () => {
  return (
    <>
        <Header/>
        <DineOption iconOne={<GiKnifeFork/>} optionOne="Dine in" linkOne={ROUTES.MENU} iconTwo={<RiShoppingBag2Line/>} optionTwo="Take out" linkTwo={ROUTES.MENU}/>
        <Footer/>
    </>
  )
}

export default DineOptions