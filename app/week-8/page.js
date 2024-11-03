"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json'
import MealIdeas from './meal-ideas'


const Page = () => {
    //initialize state with items from items.json
    const [items, setItems] = useState(itemsData);

    //Event handler to add a new item to the list
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]); //add the new item to the existing items array 
    };

    return (
        <main className="container mx-auto p-4">
            {/* Render NewItem and ItemList components */}
            <NewItem onAddItem={handleAddItem} /> {/* Pass handleAddItem as onAddItem prop */}
            <ItemList items={items} /> {/* Pass items state as items prop */}
        </main>
    );
};

export default Page;