
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.init";

const Shipment = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

   

  const handleInputEmail = event =>{
    setEmail(event.target.value);
};
const handleInputPassword = event =>{
    setPassword(event.target.value)
};
 
 const handleCreateUser = event =>{
    event.preventDefault();

}
    return (
        <div className=" bg-gray-300">
        <div className="container h-screen flex justify-center items-center">
          <form onSubmit={handleCreateUser} className="p-8 bg-white rounded-lg max-w-6xl pb-10">
            <div className="flex justify-center mb-4">
              {" "}
              <h1 className="text-2xl">Shipping Information</h1>{" "}
            </div>{" "}
            <input 
              type="text"
              className="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100 mb-3"
              placeholder="Your name"
              required
            />{" "}
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
            <input 
              type="password"
              className="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100"
              placeholder=" Confirm Password" required
            />
           
            <button type="submit" className="uppercase h-12 mt-3 text-white w-full rounded bg-[#da870b] hover:bg-[#faa422]">
              Sign Up
            </button>
            <p className=" text-center text-sm mt-1">Already have an account? <Link className="text-[#faa422]" to="/login">Login</Link></p>
            <div className="flex justify-between items-center mt-3">
              <hr className="w-full" />{" "}
              <span className="p-2 text-gray-400 mb-1">OR</span>
              <hr className="w-full" />
            </div>
          </form>
        </div>
      </div>
    );
};

export default Shipment;