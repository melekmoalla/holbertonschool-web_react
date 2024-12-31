// src/Header/Header.jsx
import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="holberton logo" />
      <h1 style={{ color: '#e1003c' }}>School dashboard</h1>
    </header>
  );
};

export default Header;
