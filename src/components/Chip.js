import React from 'react';
import css from 'styled-components';

const Span = css.span`
    background-color: #EF4056;
    border-radius: .5rem;
    color: #fff;
`;

const Chip = () => (
    <Span className="inline-block px-2 py-1 text-sm">Em atraso</Span>
);

export default Chip;