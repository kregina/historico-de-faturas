import React from 'react';
import css from 'styled-components';

import Chip from './Chip';

const Div = css.div`
    background-color: #fff;
`;

const Label = css.small`
    color: #787878;
    text-transform: uppercase;
`;

const PaymentBtn = css.button`
    color: var(--color-primar-dark);
    text-transform: uppercase;
`;

const Card = () => (
    <Div className="overflow-hidden p-4">
        <div className="flex justify-between items-center">
            <div>
                <span className="text-2xl">Fatura</span>
                <Label className="ml-2 text-lg">Dez 20</Label>
            </div>
            <Chip />
        </div>

        <div className="mt-12 px-4">
            <p>
                <span className="font-bold text-5xl">2.337</span> 
                <Label className="text-lg">MB</Label>
            </p>
            <p>
                <Label className="text-lg">R$</Label>
                <span className="text-red-500 ml-2 text-2xl">41,19</span>
            </p>
            <div className="mt-12">
                <Label className="text-lg">Vencimento</Label>
                <p>
                    <span className="text-3xl">05/01</span>
                    <small>Domingo</small>
                </p>
            </div>
        </div>
        
        <div className="flex justify-end mt-10">
            <PaymentBtn type="button" className="">Efetuar paragamento</PaymentBtn>
        </div>
    </Div>
);

export default Card;