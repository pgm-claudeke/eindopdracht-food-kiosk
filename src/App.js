import './App.css';
import React, { createContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ROUTES from "./constants/routes";
import { DineOptions, Home, Menu, PayOptions, Order, ValidateOrder } from './pages';

export const ShoppingCartContext = createContext();
export const CurrentCount = createContext();

const App = () => {

  const [cart, setCart] = useState({});
  const [count, setCount] = useState({});

  console.log('cart = ' + cart);
  console.log('count = ' + count);

  return (
    <ShoppingCartContext.Provider value={[cart, setCart]}>
    <CurrentCount.Provider value={[count, setCount]}>
      <Routes>
          <Route path={ROUTES.HOME} element={<Home/>}></Route>
          <Route path={ROUTES.DINE} element={<DineOptions/>}></Route>
          <Route path={ROUTES.MENU} element={<Menu/>}></Route>
          <Route path={ROUTES.ORDER} element={<Order/>}></Route>
          <Route path={ROUTES.VALIDATE} element={<ValidateOrder/>}></Route>
          <Route path={ROUTES.PAY} element={<PayOptions/>}></Route>
      </Routes>
    </CurrentCount.Provider>
    </ShoppingCartContext.Provider>
  )
}

export default App

// 1. creeër een context SHoppingCartContext;
// 2. doorgeven aan kinderen dat er een context is ShoppingCartContext.Provider 
// 3. geef waardes mee en spreek ze aan waar je nodig hebt dus kan in layout, pages of components
//