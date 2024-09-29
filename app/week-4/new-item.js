"use client";

import { useState } from "react";

export default function Counter() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity - 1);

    return (
        <div>
            <h1>Counter component</h1>
            <p>Count: {quantity}</p>
            <button onClick={increment} className="bg-white">+</button>
            <button onClick={decrement} className="bg-blue-500">-</button>
        </div>
    );
};

