import React from 'react';
import ROUTES from '../constants/routes';
import { Header, DineOption, Footer } from '../components';

const PayOptions = () => {
  return (
    <>
    <Header/>
    <DineOption optionOne="Payconiq" linkOne={ROUTES.MENU} optionTwo="Bancontact" linkTwo={ROUTES.MENU}/>
    <Footer/>
    </>
  )
}

export default PayOptions