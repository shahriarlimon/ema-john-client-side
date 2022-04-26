import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
    
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)


    const handleInputEmail = event =>{
        setEmail(event.target.value);
    };
    const handleInputPassword = event =>{
        setPassword(event.target.value)
    };
    const handleInputConfirmPassword = event=>{
        setConfirmPassword(event.target.value);
    };
    if(user){
        navigate('/');
    };
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Password did not match');
            return;
        }
        if(password.length < 6){
            setError('Password must be 6 character or longer');
            return;
        }
        
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className=" bg-gray-300">
        <div className="container h-screen flex justify-center items-center">
          <form onSubmit={handleCreateUser} className="p-8 bg-white rounded-lg max-w-6xl pb-10">
            <div className="flex justify-center mb-4">
              {" "}
              <h1 className="text-2xl">Sign Up</h1>{" "}
            </div>{" "}
            <input onBlur={handleInputEmail}
              type="email"
              className="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100"
              placeholder="Email"
              required
            />{" "}
            <input onBlur={handleInputPassword}
              type="password"
              className=" mt-3 h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100"
              placeholder="Password" required
            />{" "}
            <input onBlur={handleInputConfirmPassword}
              type="password"
              className="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100"
              placeholder=" Confirm Password" required
            />
            {
                <p className='text-red-500 text-sm text-center mt-1'>{error}</p>
            }
            <button type="submit" className="uppercase h-12 mt-3 text-white w-full rounded bg-[#da870b] hover:bg-[#faa422]">
              Sign Up
            </button>
            <p className=" text-center text-sm mt-1">Already have an account? <Link className="text-[#faa422]" to="/login">Login</Link></p>
            <div className="flex justify-between items-center mt-3">
              <hr className="w-full" />{" "}
              <span className="p-2 text-gray-400 mb-1">OR</span>
              <hr className="w-full" />
            </div>
            <button className="uppercase h-12 mt-3 text-black border-2 w-full rounded flex items-center justify-center">
              <FcGoogle className="text-xl mr-2" />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    );
};

export default Signup;