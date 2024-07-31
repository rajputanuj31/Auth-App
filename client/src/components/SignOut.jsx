import React, { useState } from "react";

export default function SignOut() {
  const [formData, setFormdata] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) =>{
    setFormdata({...formData,[e.target.id]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/backend/auth/signup',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if(data.success == false){
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
   
  }
  return (
    <div className="p-3 max-w-lg mx-auto bg-gradient-to-r from-gray-200 to-gray-300 my-4 rounded-xl">
      <h1 className="text-3xl text-center font-semibold my-7 text-blue-600">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={handleChange}
        />
        <button disabled={loading}
           className='bg-gradient-to-r from-gray-500 to-gray-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
         {loading ? "loading" : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p className="text-gray-600">Have an account?</p>
        <a href="#" className="text-blue-500 hover:underline">
          Sign In
        </a>
      </div>
      <p className="text-red-600 mt-4">{error && "something went wrong!"}</p>
    </div>
  );
}
