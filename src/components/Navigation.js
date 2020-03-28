import React from 'react';
import css from 'styled-components'

import IconButton from './IconButton';

const Nav = css.nav`
    background: #00E96F;
`;

const Navigation = () => (
    <Nav className="flex items-center justify-between flex-wrap p-6">
        <div className="block">
            <IconButton />
        </div>
    </Nav>
);

export default Navigation;