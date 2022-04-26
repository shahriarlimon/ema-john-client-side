import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

  const handleInputEmail = event =>{
    setEmail(event.target.value);
};
const handleInputPassword = event =>{
    setPassword(event.target.value)
};
 if(user){
  navigate(from, { replace: true });
 }
const handleSignIn = event =>{
  event.preventDefault();
  signInWithEmailAndPassword(email,password)
}
  return (
    <div className=" bg-gray-300">
      <div className="container h-screen flex justify-center items-center">
        <form onSubmit={handleSignIn} className="p-8 bg-white rounded-lg max-w-6xl pb-10">
          <div className="flex justify-center mb-4">
            {" "}
            <h1 className="text-2xl">Login</h1>{" "}
          </div>{" "}
          <input onBlur={handleInputEmail}
            type="text"
            className="h-12 rounded w-full border px-3 focus:text-black focus:border-blue-100"
            placeholder="Email"
            required
          />{" "}
          <input onBlur={handleInputPassword}
            type="password"
            className="h-12 mt-3 rounded w-full border px-3 focus:text-black focus:border-blue-100"
            placeholder="Password" required
          />
          <div className="flex justify-end items-center mt-2">
            {" "}
            <a href="/" className="text-gray-400 hover:text-gray-600">
              Forgot password?
            </a>{" "}
          </div>
          <p className="text-red-500 text-sm">{error?.message}</p>
          <button type="submit" className="uppercase h-12 mt-3 text-white w-full rounded bg-[#da870b] hover:bg-[#faa422]">
            login
          </button>
          <p className=" text-center text-sm mt-1">New to Ema-john? <Link className="text-[#faa422]" to="/signup">Create New Account</Link></p>
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

export default Login;
