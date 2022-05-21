import React from 'react';
import { Header, DineOption, Footer } from '../components';
import ROUTES from '../constants/routes';

const DineOptions = () => {
  return (
    <>
        <Header/>
        <DineOption optionOne="Dine in" linkOne={ROUTES.MENU} optionTwo="Take out" linkTwo={ROUTES.MENU}/>
        <Footer/>
    </>
  )
}

export default DineOptions