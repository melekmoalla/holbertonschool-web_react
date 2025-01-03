// src/Login/Login.jsx
import React from 'react';
import './Login.css';
import WithLogging from '../HOC/WithLogging';


const Login = () => {
  return (
    <div className="App-body">
      <div className="long-br"></div>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default WithLogging(Login);