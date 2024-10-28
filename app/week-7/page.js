import React from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import ItemsData from './items.json'


const Page = () => {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <ItemList/>
        </main>
    );
};

export default Page;