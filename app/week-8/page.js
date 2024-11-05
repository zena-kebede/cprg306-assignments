"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

const Page = () => {
    // Initialize state with items from items.json
    const [items, setItems] = useState(itemsData);
    //const [selectedIngredient, setSelectedIngredient] = useState(null); //not really necessary if we've created selectedItemName
    const [selectedItemName, setSelectedItemName] = useState(null);

    // Event handler to add a new item to the list
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]); // Add the new item to the existing items array
    };

    // Function to clean up item name (removes size, emoji, etc.)
    const cleanItemName = (name) => {
        // Remove emojis and trailing descriptors
        return name
            .split(',')[0] // Remove any additional information after comma
            .replace(/[^\p{L}\p{N}\s]/gu, '') // Remove emojis or special characters
            .trim(); // Trim any extra whitespace
    };

    // Event handler to set the selected item name and clean it up
    const handleItemSelect = (itemName) => {
        const cleanedName = cleanItemName(itemName);
        setSelectedItemName(cleanedName); // Update the selected item name state
    };

    return (
        <main className="container mx-auto p-4">
            <div className="flex">
                <div className="w-1/2 p-4">
                    {/* Render NewItem and ItemList components */}
                    <NewItem onAddItem={handleAddItem} /> {/* Pass handleAddItem as onAddItem prop */}
                    <ItemList 
                        items={items}
                        onItemSelect={handleItemSelect} // Pass handleItemSelect as onItemSelect prop
                    />
                </div>
                <div className="w-1/2 p-4">
                    {/* Render MealIdeas component with selectedItemName */}
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
};

export default Page;