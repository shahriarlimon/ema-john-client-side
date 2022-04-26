import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProduct';
import ReviewItem from '../ReviewItem/ReviewItem';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();
    const handleRemoveProduct = product =>{
        const restProducts = cart.filter(pd=>pd._id !== product._id);
        setCart(restProducts);
        removeFromDb(product._id)
    }
    return (
        <div className='grid grid-cols-5 gap-x-4 p-12'>
          <div className='col-span-3 grid grid-cols-1 gap-4 px-10'>
            {
                cart.map(product=><ReviewItem key={product._id} product={product} handleRemoveProduct={handleRemoveProduct}/>)
            }
          </div>
          <div className='border bg-[#FFE0B3] col-span-2 px-5 py-5 relative'>
               <Cart cart={cart}>
                   <Link to="/shipment">
                   <button className=' mt-3 px-3 py-2 bg-[#FF9900] w-full text-white rounded flex items-center justify-center'>Proceed Checkout < AiOutlineArrowRight className='ml-2'/></button>
                   </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Order;