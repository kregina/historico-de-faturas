import React from 'react';
import css from 'styled-components';

const Div = css.div`
    background-color: #fff;
`;

const Small = css.small`
    color: #787878;
    text-transform: uppercase;
    font-weight: 400;
`;

const Card = () => (
    <Div className="overflow-hidden p-4">
        <div className="flex">
            <div className="font-bold text-xl mb-2 ">
                Fatura
                <Small className="ml-2">Dez 20</Small>
            </div>
        </div>
        <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
    </Div>
);

export default Card;