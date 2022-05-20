import React from 'react';
import { Routes, Route } from "react-router-dom";
import ROUTES from "./constants/routes";
import { DineOptions, Home, Menu } from './pages';
import { BaseLayout } from './layouts/index.js';


const App = () => {
  return (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}></Route>
        <Route path={ROUTES.DINE} element={<DineOptions/>}></Route>
        <Route path={ROUTES.MENU} element={<Menu/>}></Route>
    </Routes>
  )
}

export default App