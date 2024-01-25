import React from 'react';
import loading from '../assets/loadingVideo.gif';

const Loader = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
    <img src={loading} alt="Loading" className="w-32 h-32 mb-4 animate-bounce " />
    <h1 className="text-lg font-semibold">{title || 'Loading'}</h1>
  </div>
);

export default Loader;
