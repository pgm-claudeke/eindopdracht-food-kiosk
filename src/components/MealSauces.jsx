import React from 'react';
import MealOptionList from './MealOptionList';

const MealSauces = ({title, handleChoice, handleActive}) => {
  return (
    <div>
        <MealOptionList title={title} filter="dipping sauces" handleChoice={handleChoice} handleActive={handleActive}/>
    </div>
  )
}

export default MealSauces