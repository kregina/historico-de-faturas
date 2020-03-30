import React from 'react';
import Flickity from 'react-flickity-component'

import Card from './Card';

const flickityOptions = {
    draggable: true
}

const Carousel = (props) => {
    let flickity;

    const onFlickityInit = (ref) => {
        flickity = ref;
        flickity.on('staticClick', function( event, pointer, cellElement, cellIndex ) {
            flickity.select(cellIndex)
        });
    };

    const faturasItems = props.faturas.map((fatura, i) => 
        <Card 
            key={fatura.id.toString()} 
            className="mx-4" 
            fatura={fatura}
        />
    );

    return (      
        <Flickity flickityRef={onFlickityInit}
            options={flickityOptions} className="my-10">
            {faturasItems}
        </Flickity>
    )
};

export default Carousel;