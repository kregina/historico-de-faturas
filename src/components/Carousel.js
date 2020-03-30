import React, { useState, useEffect} from 'react';
import css from 'styled-components';

import Card from './Card';

const Div = css.div`
    overflow-x: scroll;
`;

const Ul = css.ul`
    width: 1200px;
`;

const Li = css.li`
    width: 70vw;
    position: relative;
    right: -3.3rem;
`;

const Carousel = () => {
    const [faturas, setFaturas] = useState([]);
    const [errors, setErrors] = useState(false);
    const BASE_URL = "http://localhost:4000"


    async function fetchData() {
        const res = await fetch(`${BASE_URL}/faturas`);
        res
            .json()
            .then(res => setFaturas(res))
            .catch(err => setErrors(err));
    };

    useEffect(() => {
        fetchData()
    }, []);

    const faturasItems = faturas.map(fatura => 
        <Li key={fatura.id.toString()} className="mx-4">
            <Card fatura={fatura} />
        </Li>
    );

    return (        
        <Div>
            <Ul className="flex my-10">
               {faturasItems}                
            </Ul>
        </Div>
)};

export default Carousel;