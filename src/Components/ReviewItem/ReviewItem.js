import React from 'react';
import {AiOutlineDelete} from 'react-icons/ai'

const ReviewItem = ({product,handleRemoveProduct}) => {
    const {name , img,  price, shipping, quantity} = product;
    return (
        <div className='w-[570px] h-[107px] border-2 p-1 rounded flex items-center'>
            <div className='w-[91px] rounded'>
                <img src={img} alt="" />
            </div>
            <div className='flex justify-between w-full px-3 items-center'>
                <div>
                    <p className='text-md font-semibold'>{name.length>20?name.slice(0,20)+'...':name}</p>
                    <p>Price: <span className='text-[#FF9900]'>${price}</span></p>
                    <p>Shipping: <span className='text-[#FF9900]'>${shipping}</span></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <button onClick={()=>handleRemoveProduct(product)} className='text-[#EB5757] rounded-full'><AiOutlineDelete className='w-[37px] text-2xl' /></button>
            </div>
    
        </div>
    );
};

export default ReviewItem;