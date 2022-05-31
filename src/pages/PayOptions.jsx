import React from 'react';
import ROUTES from '../constants/routes';
import { Header, DineOption, Footer } from '../components';
import { FaCreditCard, FaQrcode } from 'react-icons/fa';

const LINKS = [
    {
        label: 'Payconiq',
        icon: <FaQrcode/>,
        route: ROUTES.MENU
    },
    {
        label: 'Bancontact',
        icon: <FaCreditCard />,
        route: ROUTES.MENU
    },
]

const PayOptions = () => {
  return (
    <>
    <Header/>
    <DineOption links={LINKS}/>
    <Footer/>
    </>
  )
}

export default PayOptions