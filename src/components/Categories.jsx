import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import useFetch from '../hooks/fetch';
import { motion, useTransform, useViewportScroll} from "framer-motion";

const CategoryList = styled(motion.ul)`
    width: 22%;
    list-style: none; 
    padding-left: 0;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;

    overflow: scroll;
    
`;

const CategoryItem = styled(motion.li)`

`;

const CategoryBtn = styled(motion.button)`
    min-height: 13.3rem;
    width: ${props => props.isActive ? '100%' : '92%'};
    background-color: ${props => props.isActive ? colors.secondary : colors.primary};
    border: none;
    border-radius: 0rem ${radius.main} ${radius.main} 0rem;
    padding: 2rem 0rem;
    margin: 0;

    color: ${colors.base};
    font-size: 2rem;
    font-weight: ${fontsWeights.bold};

    p {
        margin: 0;
    }

    > * {
        pointer-events: none;
    }
`;

const CategoryContainer = styled.div`
    margin: 0rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

const CategoryImage = styled.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const ImageContainer = styled.div`
    width: 9.6rem;
    height: 9.6rem;
    overflow: hidden; 
`;



const Categories = ({handleMenu}) => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);


    const { data, loading, error } = useFetch('https://pgm-claudeke.github.io/eindopdracht-food-kiosk/categories.json');
    const [selected, setSelected] = useState(null);

    if (loading) return <h1>LOADING...</h1>

    if (error) console.log(error)

  return (
    <CategoryList>
        {
            data.map(data => {
            const image = require('../assets/images/categories/' + data.image)
            return(
            <CategoryItem onClick={() => setSelected(data.id)} key={data.name}>
                <CategoryBtn isActive={selected === data.id} onClick={handleMenu} value={data.name}> 
                    <CategoryContainer>
                        <ImageContainer>
                            <CategoryImage src={image}/>
                        </ImageContainer>
                        <p>{data.name}</p>
                    </CategoryContainer>
                </CategoryBtn>
            </CategoryItem>
            )
            })
        }
        
    </CategoryList>
  )
}

export default Categories