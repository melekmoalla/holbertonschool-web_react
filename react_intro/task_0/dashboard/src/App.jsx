import React from 'react';
import './App.css';
import logo from './assets/holberton-logo.jpg'; // Import logo

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1 style={{ color: '#e1003c' }}>School dashboard</h1>
      </header>
      <div className="App-body">
      <div class="long-br"></div>

        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
      <div class="long-br"></div>
        <p>Copyright 2024 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
