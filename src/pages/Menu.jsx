import React, {useState} from 'react'
import styled from 'styled-components';
import { Categories, Header, CurrentOrder, Meals, MealType } from '../components';
import useFetch from '../hooks/fetch';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 70vh;
`;

const Menu = () => {
    const [category, setCategory] = useState(null);
    const [menu, setMenu] = useState(null);
    const [filter, setFilter] = useState(null);
    const [types, setTypes] = useState(null);
    const [mealId, setMealId] = useState(null);

    const {data, loading, error} = useFetch('https://pgm-claudeke.github.io/eindopdracht-food-kiosk/meals.json');
    if (loading) return <h1>LOADING...</h1>
    if (error) console.log(error)

    const handleMenu = (e) => {
        setCategory(e.target.value);
        setFilter(e.target.value.toLowerCase())
    }

    console.log(filter)

    const handleMealType = (e) => {
        console.log('clicked');
        console.log(e.target.id);

        const mealTypes = data.find(data => data.id == e.target.id);
        const types = mealTypes.types;

        console.log(mealTypes);
        setTypes(types);
        setMealId(e.target.id)
    }

    const handleClose = () => {
        setTypes(null)
    }

  return (
    <>
        <Header/>
        <MenuContainer>
            <Categories handleMenu={handleMenu}/>
            <Meals category={category} filter={filter}  handleMealType={handleMealType}/>
            {
                types
                ?
                <MealType handleClose={handleClose} data={types}/>
                :
                <></>
            }
        </MenuContainer>

        <CurrentOrder/>
    </>
  )
}

export default Menu