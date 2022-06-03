import React, { useState } from "react";
import styled from "styled-components";
import {
  Categories,
  Header,
  CurrentOrder,
  Meals,
  MealType,
  MealOptions
} from "../components";
import useFetch from "../hooks/fetch";
import ROUTES from "../constants/routes";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 70vh;
`;

const Menu = ({ order }) => {
  const [category, setCategory] = useState(null);
  const [filter, setFilter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(false);

  const [types, setTypes] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedMealId, setSelectedMealId] = useState(null);
  
  
  const [menu, setMenu] = useState(null);
  
  
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [options, setOptions] = useState(null);
  
  let navigate = useNavigate();

  const { data, loading, error } = useFetch(
    "https://pgm-claudeke.github.io/eindopdracht-food-kiosk/meals.json"
  );
  if (loading) return <h1>LOADING...</h1>;
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

  const handleSelected = () => {
    setSelectedCategory(true)
  }

  return (
    <>
      <Header />
      <MenuContainer>
        <Categories handleMenu={handleMenuList} handleSelected={handleSelected}/>
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
          <MealOptions data={options} handleClose={handleCloseOptions}/>
      )
      }
    </>
  );
};

export default Menu;
