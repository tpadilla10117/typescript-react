import React, { useState } from 'react';
/* import Greeter from './components/Greeter'; */
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import './App.css';
/* 
const items = [
  {   
      id: 1,
      product: 'Lemon',
      quantity: 3
  },
  {   
      id: 2,
      product: 'Chicken Breast',
      quantity: 2
  }
]; */

interface Item {
  id: number;
  product: string;
  quantity: number;
};


function App() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <div className="App">
      {/* <Greeter person='Drake' /> */}
      <ShoppingList items={items} />
      <ShoppingListForm />
    </div>
  );
}

export default App;
