import React from 'react';

function ShoppingListForm(): JSX.Element {
    return (
        <form>
            <input type='text' placeholder='Product Name'/>
            <button type='submit'>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;