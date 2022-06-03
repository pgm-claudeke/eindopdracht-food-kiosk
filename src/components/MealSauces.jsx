import React from 'react';
import MealOptionList from './MealOptionList';

const MealSauces = ({title}) => {
  return (
    <div>
        <MealOptionList title={title} filter="dipping sauces"/>
    </div>
  )
}

export default MealSauces