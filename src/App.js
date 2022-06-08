import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ROUTES from "./constants/routes";
import { DineOptions, Home, Menu, PayOptions, Order, ValidateOrder } from './pages';

export const ShoppingCartContext = createContext();
export const CurrentCount = createContext();
export const CurrentOptions = createContext({});


const App = () => {

  const [cart, setCart] = useState({});
  const [count, setCount] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  console.log('count = ' + count);
  console.log('options = ' + Object.values(selectedOptions));
  console.log('cart = ' + Object.values(cart))
  useEffect(() => {
    //save to local storage
  }, [cart]);

  return (
    <ShoppingCartContext.Provider value={[cart, setCart]}>
    <CurrentCount.Provider value={[count, setCount]}>
    <CurrentOptions.Provider value={[selectedOptions, setSelectedOptions]}>
      <Routes>
          <Route path={ROUTES.HOME} element={<Home/>}></Route>
          <Route path={ROUTES.DINE} element={<DineOptions/>}></Route>
          <Route path={ROUTES.MENU} element={<Menu/>}></Route>
          <Route path={ROUTES.ORDER} element={<Order/>}></Route>
          <Route path={ROUTES.VALIDATE} element={<ValidateOrder/>}></Route>
          <Route path={ROUTES.PAY} element={<PayOptions/>}></Route>
      </Routes>
    </CurrentOptions.Provider>
    </CurrentCount.Provider>
    </ShoppingCartContext.Provider>
  )
}

export default App

// 1. creeër een context SHoppingCartContext;
// 2. doorgeven aan kinderen dat er een context is ShoppingCartContext.Provider 
// 3. geef waardes mee en spreek ze aan waar je nodig hebt dus kan in layout, pages of components
//