import React, { useRef } from 'react';

interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void;
};

function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {

/* Has to have the indicated type: */
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputeRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event:React.FormEvent) {
        event.preventDefault();
        const newProduct = productInputRef.current!.value;
        const quantity = parseInt(quantityInputeRef.current!.value);
        onAddItem(newProduct, quantity);
        console.log('The current Ref: ', productInputRef.current?.value)
        productInputRef.current!.value = '';
        quantityInputeRef.current!.value = '1';
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Product Name' ref={productInputRef} />
            <input type='number' min={0} ref={quantityInputeRef} />
            <button type='submit'>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;