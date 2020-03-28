import React from 'react';
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

const Carousel = () => (
    <Div>
        <Ul className="flex my-10">
            <Li className="mx-4">
                <Card />
            </Li>

            <Li className="mx-4">
                <Card />
            </Li>

            <Li className="mx-4">
                <Card />
            </Li>
        </Ul>
    </Div>
);

export default Carousel;