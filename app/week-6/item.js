import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 border-b border-gray-200 flex justify-between items-center">
      <div className="flex-grow">
        <span className="font-semibold">{name}</span> - ({category})
      </div>
      <div className="flex-shrink-0 w-12 text-center">{quantity}</div>
    </li>
  );
};

export default Item;