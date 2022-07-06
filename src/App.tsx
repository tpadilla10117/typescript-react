import React, { useState } from 'react';
import { v4 as getId} from 'uuid';
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
  id: string;
  product: string;
  quantity: number;
};


function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    console.log('Firing from the app component: ', product);
    setItems([...items, {id: getId(), product, quantity}])
  };

  return (
    <div className="App">
      {/* <Greeter person='Drake' /> */}
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
