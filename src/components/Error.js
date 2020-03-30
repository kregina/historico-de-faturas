import React from 'react';

const Error = (props) => {
    const renderView = !props.errors 
        ? "Loading..."
        : props.errors.toString();
        
    return (
        <div>{renderView}</div>
    )
};

export default Error;