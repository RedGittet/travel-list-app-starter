import React from "react";

export default function Item({ item, onDeleteItem, onUpdateItem }) {
    return (
      <li>
        <input 
          type="checkbox" 
          checked={item.packed} 
          onChange={() => onUpdateItem(item.id)} 
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.description} ({item.quantity})
        </span>
        <button onClick={() => onDeleteItem(item.id)}>X</button>
      </li>
    );
  }