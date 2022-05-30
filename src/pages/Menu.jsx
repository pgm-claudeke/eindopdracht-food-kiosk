import React, {useState} from 'react'
import styled from 'styled-components';
import { Categories, Header, CurrentOrder, Meals, MealType, MealOption } from '../components';
import useFetch from '../hooks/fetch';
import ROUTES from '../constants/routes';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 70vh;
`;

const Menu = ({order}) => {
    const [category, setCategory] = useState(null);
    const [menu, setMenu] = useState(null);
    const [filter, setFilter] = useState(null);
    const [types, setTypes] = useState(null);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const {data, loading, error} = useFetch('https://pgm-claudeke.github.io/eindopdracht-food-kiosk/meals.json');
    if (loading) return <h1>LOADING...</h1>
    if (error) console.log(error)

    const handleMenu = (e) => {
        setCategory(e.target.value);
        setFilter(e.target.value.toLowerCase())
    }

    const handleMeal = (e) => {
        const selectedMeal = data.find(data => data.id == e.target.id);
        setTypes(selectedMeal.types);
        setSelectedMeal(selectedMeal.name)

        if(!selectedMeal.types){
            return window.location.href=ROUTES.MEAL
        }
    }

    const handleClose = () => {
        setTypes(null)
    }

    const handleRedirect = () => {
        return window.location.href=ROUTES.MEAL
    }

  return (
    <>
        <Header/>
        <MenuContainer>
            <Categories handleMenu={handleMenu}/>
            <Meals category={category} filter={filter}  handleFunction={handleMeal}/>
            {
                types
                ?
                <MealType handleClose={handleClose} data={types} mealName={selectedMeal} handleFunction={handleRedirect}/>
                :
                <></>
            }
            
        </MenuContainer>
        <CurrentOrder/>
    </>
  )
}

export default Menu