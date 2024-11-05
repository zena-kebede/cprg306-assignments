import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li 
      className="p-2 border-b border-gray-200 flex justify-between items-center cursor-pointer"
      onClick={() => onSelect(name)} // Trigger onSelect with the item name when clicked
      style={{
        cursor: 'pointer', // Make cursor pointer for better UX
        padding: '8px',
        transition: 'background-color 0.3s', // Smooth transition effect
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5ca3af'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <div className="flex-grow">
        <span className="font-semibold">{name}</span> - ({category})
      </div>
      <div className="flex-shrink-0 w-12 text-center">{quantity}</div>
    </li>
  );
};

export default Item;
