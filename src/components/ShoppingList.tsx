import React from 'react';

interface Item {
    id: string;
    product: string;
    quantity: number;
};

interface ShoppingListProps {
    items: Item[];
};

function ShoppingList(props: ShoppingListProps):JSX.Element {
    
    return (
        <main>
            <h1>Shopping List</h1>
            <ul>
                {props.items.map((item) => (
                    <li key={item.id}>{item.product} - {item.quantity}</li>
                ))}
            </ul>
        </main>
    )
}

export default ShoppingList;