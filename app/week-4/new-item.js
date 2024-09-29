"use client";

import { useState } from "react";

export default function Quantity() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1)
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg w-48">
            <p className="text-lg font-semibold">{quantity}</p>
            <button 
            onClick={decrement} 
            className={`w-10 h-10 flex justify-center items-center rounded-full text-white font-bold transition-colors duration-300 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed`}
            disabled={quantity === 1}>-</button>
            <button 
            onClick={increment} 
            className={`w-10 h-10 flex justify-center items-center rounded-full text-white font-bold transition-colors duration-300 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed`}
            disabled={quantity === 20}>+</button>
        </div>
    );
}

