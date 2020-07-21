import React from 'react';
import styled from 'styled-components';

const OrderCard = ({ order }) => {

    const displayCondiments = () => {
        const condiments = Object.keys(order.condiments);

        const orderedCondiments = []

        condiments.forEach(key => {
            if (order.condiments[key]) {
                orderedCondiments.push(key);
            }
        })
        return orderedCondiments;
    }
    return (
        <div>
            <h2>{order.name}</h2>
            <h3>{order.phone}</h3>
            <p>{order.pizza_size}</p>
            <p>{order.patties} patties</p>
            {displayCondiments().map((condiment, i) => <p key={i}>{condiment}</p>)}
            <p>{order.instructions}</p>
        </div>
    );
}

export default OrderCard;