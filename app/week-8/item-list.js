"use client";

import { useState } from "react";
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');

// Create a grouped version of items without mutating the prop
const groupedItems = sortBy === 'group'
  ? Object.entries(
      items.reduce((acc, item) => {
        // Standardize category names for consistent grouping
        const category = item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase();
        if (!acc[category]) acc[category] = [];
        acc[category] = [...acc[category], item]; // Add item to a new array for immutability
        return acc;
      }, {})
    )
    .map(([category, itemsInCategory]) => [
      category, 
      [...itemsInCategory].sort((a, b) => a.name.localeCompare(b.name)) // Sort each category by name
    ])
    .sort((a, b) => a[0].localeCompare(b[0])) // Sort categories alphabetically
  : null;

  // Create a sorted version of items without mutating the prop
  const sortedItems = [...items].sort((a, b) => {
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
          {groupedItems.map(([category, itemsInCategory], categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2 className="text-lg font-bold capitalize mb-2">{category}</h2>
              <ul className="list-none p-4">
                {itemsInCategory.map((item, itemIndex) => (
                  <Item key={itemIndex} {...item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="list-none p-4">
          {sortedItems.map((item, itemIndex) => (
            <Item key={itemIndex} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
