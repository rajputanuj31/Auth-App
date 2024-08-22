import React from 'react';

export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>About</h1>
      <p className='mb-4 text-slate-700'>
        This application is built using the MERN (MongoDB, Express, React, Node.js) stack and includes secure authentication features. It allows users to register, log in, log out, and access protected routes only after authentication.
      </p>
      <p className='mb-4 text-slate-700'>
        The front-end utilizes React along with React Router for efficient client-side routing, while the back-end relies on Node.js and Express for handling server operations. MongoDB serves as the database, and authentication is implemented using JSON Web Tokens (JWT) for secure sessions.
      </p>
      <p className='mb-4 text-slate-700'>
        This application provides a solid foundation for building full-stack web applications with secure authentication. Feel free to adapt and expand it to fit your own project needs!
      </p>
    </div>
  );
}
