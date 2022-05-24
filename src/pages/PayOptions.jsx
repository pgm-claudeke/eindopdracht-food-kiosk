import React from 'react';
import ROUTES from '../constants/routes';
import { Header, DineOption, Footer } from '../components';
import { FaCreditCard, FaQrcode } from 'react-icons/fa';

const PayOptions = () => {
  return (
    <>
    <Header/>
    <DineOption iconOne={<FaQrcode/>} optionOne="Payconiq" linkOne={ROUTES.MENU} iconTwo={<FaCreditCard/>} optionTwo="Bancontact" linkTwo={ROUTES.MENU}/>
    <Footer/>
    </>
  )
}

export default PayOptions