import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';
import logo from  '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='flex items-center justify-between h-20 bg-[#1C2B35] text-white'>
            <div className='ml-20'>
                <img className='w-[140px] h-[40px] cursor-pointer' src={logo} alt="" />
            </div>
            <div className='space-x-4 mr-20 flex '>
                <CustomLink className='hover:text-orange-500' to="/">Home</CustomLink>
                <CustomLink className='hover:text-orange-500' to="/shop">Shop</CustomLink>
                <CustomLink className='hover:text-orange-500' to="/order">Order</CustomLink>
                <CustomLink className='hover:text-orange-500' to="/manage">Inventory</CustomLink>
               { user?<button onClick={handleSignOut}  className='hover:text-orange-500'>SignOut</button>
                :<CustomLink className='hover:text-orange-500' to="/login">Login</CustomLink>}
            </div>
        </nav>
    );
};

export default Header;