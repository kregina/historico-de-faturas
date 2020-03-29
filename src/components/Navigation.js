import React from 'react';
import css from 'styled-components'

const Nav = css.nav`
    background: var(--color-primary);
`;

const Svg = css.svg`
    fill: #000000;
`;

const Navigation = () => (
    <Nav className="flex items-center justify-between flex-wrap p-6">
        <div className="block">
            <button className="flex items-center px-3 py-2 text-teal-200 border-teal-400 hover:text-white">
                <Svg className="h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </Svg>
            </button>
        </div>
    </Nav>
);

export default Navigation;