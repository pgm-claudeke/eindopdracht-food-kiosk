import React from 'react';
import ROUTES from '../constants/routes';
import { Header, OrderOptions, Footer } from '../components';
import { FaCreditCard, FaQrcode } from 'react-icons/fa';

const LINKS = [
    {
        label: 'Payconiq',
        icon: <FaQrcode/>,
        route: ROUTES.CODEPAY
    },
    {
        label: 'Bancontact',
        icon: <FaCreditCard />,
        route: ROUTES.CARDPAY
    },
]

const PayOptions = () => {
  return (
    <>
    <Header/>
    <OrderOptions links={LINKS}/>
    <Footer/>
    </>
  )
}

export default PayOptions