import React, { useState } from 'react';
import './App.css';

function App() {
  // State untuk menyimpan daftar belanjaan
  const [items, setItems] = useState([]);
  // State untuk menyimpan item baru yang akan ditambahkan
  const [itemName, setItemName] = useState('');

  // Fungsi untuk menambahkan item baru ke daftar belanjaan
  const addItem = () => {
    if (itemName.trim() !== '') {
      setItems([...items, itemName]);
      setItemName('');
    }
  };

  // Fungsi untuk menghapus item dari daftar belanjaan
  const removeItem = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter an item"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
