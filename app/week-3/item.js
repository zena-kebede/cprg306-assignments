import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex justify-between p-2 border-b border-gray-200">
            <span className="font-bold">{name}</span>
            <span>{quantity}</span>
            <span className="text-gray-500">{category}</span>
        </li>
    );
};