import React from 'react';

function ShoppingList():JSX.Element {
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
    ]


    return (
        <main>
            <h1>Shopping List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.product} - {item.quantity}</li>
                ))}
            </ul>
        </main>
    )
}

export default ShoppingList;