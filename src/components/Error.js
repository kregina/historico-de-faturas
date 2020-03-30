import React from 'react';

const Error = (props) => (
    <div>{props.errors.toString()}</div>
);

export default Error;