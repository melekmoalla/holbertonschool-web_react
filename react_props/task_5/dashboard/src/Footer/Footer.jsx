// src/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="long-br"></div>
      <p>Copyright {getCurrentYear()} {getFooterCopy(true)}</p>
    </footer>
  );
};

export default Footer;
