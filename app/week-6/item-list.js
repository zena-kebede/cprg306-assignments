"use client";

import { useState } from "react";
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a,b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      {/*Sort Buttons */}
      <div className="mb-4">
        <button
        onClick={() => setSortBy('name')}
        className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Name
          </button>
          <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Sort by Category
            </button>
      </div>
      {/* Item List */}
      <ul className="list-none p-4">
        {sortedItems.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;