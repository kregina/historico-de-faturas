import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
  } from 'react-router-dom';
import { Helmet } from "react-helmet";

import * as FaturasService from "../services/faturas-service";
  
import Navigation from './Navigation';
import Carousel from './Carousel';
import Error from './Error';

const Layout = () => {
    const [faturas, setFaturas] = useState([]);
    const [errors, setErrors] = useState(false);
    
    function getFaturas(){
        return FaturasService.getFaturas()
            .then(res => res.json())
            .then(res => setFaturas(res))
            .catch(err => setErrors(err))
    };

    useEffect(() => {
        getFaturas();
    }, []);

    const redenderView = faturas.length 
        ? <Carousel faturas={faturas} />
        : <Error errors={errors} />;

    return (
        <Router>
            <Helmet>
                <title>Histórico de Faturas</title>
            </Helmet>

            <Navigation />
            {redenderView}
        </Router>
    )
};

export default Layout;