"use client";

import { useState } from "react";

export default function GroceryItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

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

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = { name, quantity, category };
        console.log(item)
        alert(`Name: ${name} Quantity: ${quantity}, Category: ${category}`)
        
        //Reset the state variables
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    return (
        
        <div className="flex justify-center">
        <div className="flex justify-center items-center space-x-4 p-6 border border-gray-300 rounded-lg w-full max-w-md bg-white shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
            {/*Name fields */}
            <div>
                <label htmlFor="name" className="block mb-2 font-medium">Item Name:</label>
                <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
                />
            </div>

            {/*Quantity fields */}
            <div className="flex items-center space-x-4">
            <p className="text-lg font-semibold">{quantity}</p>
            <div className="flex space-x-2">
            <button
            type="button" 
            onClick={decrement} 
            className={`w-10 h-10 flex justify-center items-center rounded-full text-white font-bold transition-colors duration-300 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed`}
            disabled={quantity === 1}>-</button>
            <button
            type="button" 
            onClick={increment} 
            className={`w-10 h-10 flex justify-center items-center rounded-full text-white font-bold transition-colors duration-300 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed`}
            disabled={quantity === 20}>+</button>
            </div>
            </div>

            {/*Category fields */}
            <div>
                <label htmlFor="category" className="block mb-2 font-medium">Category</label>
                <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full"
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            {/*Submit button*/}
            <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
            >
                Submit
            </button>
        </form>
    </div>
</div>);
};