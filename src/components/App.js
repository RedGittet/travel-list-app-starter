import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";



function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim()) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function Item({ item, onDeleteItem, onUpdateItem }) {
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

function PackingList({ items, onDeleteItem, onUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item 
            item={item} 
            onDeleteItem={onDeleteItem} 
            onUpdateItem={onUpdateItem} 
            key={item.id} 
          />
        ))}
      </ul>
    </div>
  );
}

function App() {

  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleUpdateItem(id) {
    setItems((prevItems) => 
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));  
  } 

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList 
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items}/>
    </div>
  );
}

export default App;
