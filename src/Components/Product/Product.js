import React from 'react';
import {BsFillCartCheckFill} from 'react-icons/bs'

const Product = (props) => {
  const  { name, img, price,seller, ratings} = props.product;
  const addToCartHandler = props.addToCartHandler;
    return (
        <div className='mt-12 ml-12 relative border rounded w-[300px] h-[500px] font-sans shadow-lg '>
           <div>
           <img className='w-[286px] h-[286px] m-2 border rounded' src={img} alt="" />
            <div className=' mx-3'>
            <h2 className='text-xl'>{name}</h2>
            <p className='text-xl'>Price: ${price}</p>
            <div className='text-sm mt-5'>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} stars</p>
            </div>
            </div>
           </div>
            <button onClick={()=>addToCartHandler(props.product)} className='w-full bg-[#FFE0B3] font-semibold px-4 py-2 absolute  bottom-0 rounded hover:bg-orange-500 flex items-center justify-center'>Add to Cart <BsFillCartCheckFill className='ml-2'/> </button>
        </div>
    );
};

export default Product;