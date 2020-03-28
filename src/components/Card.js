import React from 'react';
import css from 'styled-components';

import Chip from './Chip';

const Div = css.div`
    background-color: #fff;
`;

const Small = css.small`
    color: #787878;
    text-transform: uppercase;
`;

const Card = () => (
    <Div className="overflow-hidden p-4">
        <div className="flex justify-between items-center">
            <div>
                <span className=" text-3xl">Fatura</span>
                <Small className="ml-2 text-xl">Dez 20</Small>
            </div>
            <Chip />
        </div>
        <div className="mt-12">
            <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
    </Div>
);

export default Card;