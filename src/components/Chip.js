import React from 'react';
import css from 'styled-components';

const Span = css.span`
    border-radius: .3rem;
    color: #fff;
`;

const Chip = (props) => {
    const className = `bg-${props.status.codigo.toLowerCase()} inline-block px-2 py-1`;
        
    return (
        <Span className={className}>{props.status.descricao}</Span>
    )
};

export default Chip;