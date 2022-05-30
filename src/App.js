import React from 'react';
import { Routes, Route } from "react-router-dom";
import ROUTES from "./constants/routes";
import { DineOptions, Home, Menu, PayOptions, Order, MealOptions } from './pages';


const App = () => {
  return (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}></Route>
        <Route path={ROUTES.DINE} element={<DineOptions/>}></Route>
        <Route path={ROUTES.MENU} element={<Menu/>}></Route>
        <Route path={ROUTES.MEAL} element={<MealOptions/>}></Route>
        <Route path={ROUTES.ORDER} element={<Order/>}></Route>
        <Route path={ROUTES.PAY} element={<PayOptions/>}></Route>
    </Routes>
  )
}

export default App