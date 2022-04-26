import React from 'react';
import {AiFillDelete} from 'react-icons/ai'

const Cart = (props) => {
    const cart = props.cart;
    let quantity = 0; 
    let total = 0;
    let shipping = 0;
    for ( const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='sticky top-0 py-5'>
             <h2 className='text-2xl font-bold my-2'>Order Summary:</h2>
             <div className='text-lg my-2 py-2'>
             <p className='text-lg'>Selected Items: {quantity}</p>
             <p>Total Price: ${total}</p>
             <p>Total Shipping Charge: ${shipping}</p>
             <p>Tax: ${tax}</p>
             </div>
             <p className='text-lg font-semibold'>Grand Total: ${grandTotal.toFixed(2)}</p>
             <div className='mt-12'>
                 <button className='px-3 py-2 bg-[#FF3030] w-full text-white rounded flex items-center justify-center'>Clear Cart < AiFillDelete className='ml-2'/></button>
                 {props.children}
             </div>
        </div>
    );
};

export default Cart;