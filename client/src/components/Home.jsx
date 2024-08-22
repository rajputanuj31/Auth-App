import React from 'react';

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to my Secure Auth App!
      </h1>
      <p className='mb-4 text-slate-700'>
        This is a robust full-stack web application built with the MERN (MongoDB,
        Express, React, Node.js) stack. It features advanced authentication that
        enables users to register, log in, log out, and access protected routes securely.
      </p>
      <p className='mb-4 text-slate-700'>
        The front-end leverages React and React Router for seamless client-side routing.
        The back-end is powered by Node.js and Express, with MongoDB handling data storage.
        Authentication is securely implemented using JSON Web Tokens (JWT).
      </p>
      <p className='mb-4 text-slate-700'>
        This application serves as a solid foundation for creating full-stack 
        web applications with secure authentication using the MERN stack. 
        Feel free to customize and extend it for your own projects!
      </p>
    </div>
  );
}
