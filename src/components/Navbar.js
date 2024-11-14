import React from 'react';
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Apply navbar class for overall styling */}
      <h1>EcoFarm Network</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Job Matching</a></li>
        <li><a href="#">Resource Sharing</a></li>
        <li><a href="#">Marketplace</a></li>
        <li><a href="#">Education</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
