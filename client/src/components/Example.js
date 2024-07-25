import React from 'react';

export default Example = props => {
    return (
        <div>
        <h3>{props.example.name}</h3>
        <p>{props.example.descriptions}</p>
        <p>{props.example.date.substring(0,10)}</p>
        </div>
    )
}