"use client";

import { useState } from "react";
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const groupedItems = sortBy === 'group' 
    ? Object.entries(
        items.reduce((acc, item) => {
          // Group items by category
          if (!acc[item.category]) acc[item.category] = [];
          acc[item.category].push(item);
          return acc;
        }, {})
      ).sort((a, b) => a[0].localeCompare(b[0])) // Sort categories alphabetically
    : null;

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
      {/* Sort Buttons */}
      <div className="mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 mr-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-4 py-2 ${sortBy === 'group' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Group by Category
        </button>
      </div>

      {/* Display grouped or sorted items */}
      {sortBy === 'group' ? (
        <div>
          {groupedItems.map(([category, itemsInCategory], index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-bold capitalize mb-2">{category}</h2>
              <ul className="list-none p-4">
                {itemsInCategory.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => (
                  <Item key={index} {...item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="list-none p-4">
          {sortedItems.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;