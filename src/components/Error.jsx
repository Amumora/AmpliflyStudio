import React from 'react';

const Error = ({ message = 'Something went wrong. Please try again' }) => (
  <div className="flex items-center justify-center h-screen bg-red-500 text-white">
    <h1 className="text-lg font-semibold mb-2">{message}</h1>
  </div>
);

export default Error;
