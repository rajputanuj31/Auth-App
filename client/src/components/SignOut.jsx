import React from "react";

export default function SignOut() {
  return (
    <div className="p-3 max-w-lg mx-auto bg-gradient-to-r from-gray-200 to-gray-300 my-4 rounded-xl">
      <h1 className="text-3xl text-center font-semibold my-7 text-blue-600">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button 
           className='bg-gradient-to-r from-gray-500 to-gray-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
         Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p className="text-gray-600">Have an account?</p>
        <a href="#" className="text-blue-500 hover:underline">
          Sign In
        </a>
      </div>
    </div>
  );
}
