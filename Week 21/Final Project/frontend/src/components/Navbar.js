

import React from 'react';
//import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Retro Snake Game</h1>
      <ul>
        <li><a href="http://localhost:3000/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/leaderboard">Leaderboard</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;