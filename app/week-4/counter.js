"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);


    return (
        <div>
            <h1>Counter component</h1>
            <p>Count: {count}</p>
            <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-write w-20 rounded">Increment</button>
        </div>
    );
}