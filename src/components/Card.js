import React from 'react';
import css from 'styled-components';
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

import Chip from './Chip';

const Div = css.div`
    background-color: #fff;
    min-height: 405px;
    width: 70vw;
`;

const Label = css.small`
    color: #787878;
    text-transform: uppercase;
`;

const PaymentBtn = css.button`
    color: var(--color-primary-dark);
    text-transform: uppercase;
`;

const formataDatas = (data, formato) =>  format(Date.parse(data), formato, { locale: ptBR })

const Card = (props) => {

    const dataFatura = formataDatas(props.fatura.dataFatura, "MMM yy");
    const dataVencimento = formataDatas(props.fatura.dataVencimento, "dd/MM");
    const dataVencimentoDiaSemana = formataDatas(props.fatura.dataVencimento, "EEEE");
    const classNameValor = `text-${props.fatura.status.codigo.toLowerCase()}  ml-2 text-2xl`;

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    const showPagamentoBtn = (props.fatura.status.codigo !== "PAGO") 
        ? <PaymentBtn type="button">Efetuar paragamento</PaymentBtn>
        : null;

    return (    
        <Div className="overflow-hidden p-4 mx-3">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-2xl">Fatura</span>
                    <Label className="ml-2 text-lg">{dataFatura}</Label>
                </div>
                <Chip status={props.fatura.status} />
            </div>

            <div className="mt-12 px-4">
                <p>
                    <span className="font-bold text-5xl">{props.fatura.megabitesUtilizados}</span> 
                    <Label className="text-lg">MB</Label>
                </p>
                <p>
                <span className={classNameValor}>{formatter.format(props.fatura.valor)}</span>
                </p>
                <div className="mt-12">
                    <Label className="text-lg">Vencimento</Label>
                    <p>
                        <span className="text-3xl">{dataVencimento}</span>
                        <small>{` ${dataVencimentoDiaSemana}`}</small>
                    </p>
                </div>
            </div>
            <div className="flex justify-end mt-10">
                {showPagamentoBtn}                
            </div>
            
        </Div>
    )
};

export default Card;