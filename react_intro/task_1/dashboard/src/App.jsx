import React from 'react';
import './App.css';
import logo from './assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <div>
      <div className='root-notifications'>
          <Notifications />
      </div>
      <header className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1 style={{ color: '#e1003c' }}>School dashboard</h1>
      </header>

      <div className="App-body">
        <div className="long-br"></div>
          <p>Login to access the full dashboard</p>
        </div>

        <footer className="App-footer">
        <div className="long-br"></div>
        <p>Copyright {getCurrentYear()} {getFooterCopy(true)}</p>
        </footer>
      </div>
  );
}

export default App;
