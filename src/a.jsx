import React from 'react';
import testImage from './data/img/logo-dark.png'; // Make sure you have an image here

function A() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        className="w-[300px] h-[200px] bg-cover bg-center bg-no-repeat text-white text-center p-6 rounded-xl shadow-lg"
        style={{ backgroundImage: `url(${testImage})` }}
      >
        <h1 className="text-xl font-bold">Tailwind Test</h1>
        <p className="mt-2 text-sm text-yellow-300">Background image ✔️</p>
        <p className="text-sm text-green-300">Text color ✔️</p>
        <p className="text-sm text-blue-300">Padding & border radius ✔️</p>
      </div>
    </div>
  );
}

export default A;
