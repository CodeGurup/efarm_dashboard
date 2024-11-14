import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">EcoFarm Network</h1>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Job Matching</a></li>
        <li><a href="#" className="hover:underline">Resource Sharing</a></li>
        <li><a href="#" className="hover:underline">Marketplace</a></li>
        <li><a href="#" className="hover:underline">Education</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
