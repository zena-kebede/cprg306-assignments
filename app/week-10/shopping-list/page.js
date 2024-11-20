{/*Part 6: Protect the Shopping List Page
Even though a user can't see a link to the shopping list page without being logged in, 
we should still protect the page so that if a user tries to access the page directly, they won't be able to see the shopping list.

In the week-9/shopping-list/page.js file, 
check if the user is logged in by using the useUserAuth hook and if the user object is null, 
do not render the shopping list page. Optional: You can redirect the user to the landing page if you want. */}


"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import useEffect from 'react';
import getItems, { addItem } from './shopping-list-service.js'

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