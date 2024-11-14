import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">EcoFarm Network</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#job-matching" className="hover:underline">Job Matching</a>
          <a href="#resource-sharing" className="hover:underline">Resource Sharing</a>
          <a href="#marketplace" className="hover:underline">Marketplace</a>
          <a href="#education" className="hover:underline">Education</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
