import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  Categories,
  Header,
  CurrentOrder,
  Meals,
  MealType,
  MealOptions,
  Loading
} from "../components";
import useFetch from "../hooks/fetch";
import ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";
import { CurrentOptions, ShoppingCartContext } from "../App";
import { pageSwitch } from "../constants/animations";
import { motion } from "framer-motion";


const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 

  height: 70vh;
`;

const Menu = () => {
  const [category, setCategory] = useState(null);
  const [filter, setFilter] = useState(null);

  const [types, setTypes] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedMealId, setSelectedMealId] = useState(null);
  
  const [options, setOptions] = useState(null);

  const { data, loading, error } = useFetch(
    "https://pgm-claudeke.github.io/eindopdracht-food-kiosk/meals.json"
  );
  if (loading) return <Loading/>;
  if (error) console.log(error); // loading en error veranderen

  const handleMenuList = (e) => {
    setCategory(e.target.value);
    setFilter(e.target.value.toLowerCase());
  };

  const handleMealTypes = (e) => {
    const selectedMeal = data.find((data) => data.id === e.target.id);
    setTypes(selectedMeal.types);
    setSelectedMeal(selectedMeal.name);
    setSelectedMealId(e.target.id);

    if(!selectedMeal.types){
        setOptions(selectedMeal);
    }
  };

  const handleClose = () => {
    setTypes(null);
  };

  const handleRedirect = (e) => {
    const selectedMeal = data.find((data) => data.id === selectedMealId);
    const mealTypes = selectedMeal.types;
    const selectedType = mealTypes.find((type) => type.id === e.target.id)
    
    setOptions(selectedType);
  };

  const handleCloseOptions = () => {
      setOptions(null);
  }

  const handleModals = (e) => {    
    setOptions(null);
    setTypes(null)
  }

  return (
    <motion.div>
      <Header />
      <MenuContainer>
        <Categories handleMenu={handleMenuList}/> 
        {category && (
        <Meals
          key={filter}
          category={category}
          filter={filter}
          handleFunction={handleMealTypes}
        />
        )}
        {types && (
          <MealType 
            handleClose={handleClose}
            data={types}
            mealName={selectedMeal}
            handleFunction={handleRedirect}
          />
        )}
      </MenuContainer>
      <CurrentOrder/>
      {options && (
          <MealOptions data={options} handleClose={handleCloseOptions} key={options} handleModals={handleModals} mealInfo={options} />
      )
      }
       
    </motion.div>
  );
};

export default Menu;
