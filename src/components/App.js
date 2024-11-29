import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import Form from "./Form";
import PackingList from "./PackingList";

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
