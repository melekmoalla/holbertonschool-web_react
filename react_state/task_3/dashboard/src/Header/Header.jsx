// src/Header/Header.jsx
import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import newContext from '../Context/context';



const Header = () => {
  
  return (
    <header className={css(styles.Appheader)}>
      <img src={logo} alt="holberton logo" />
      <h1 style={{ color: '#e1003c' }}>School dashboard</h1>
    </header>
  );
};

const styles = StyleSheet.create({
  Appheader: {
    display: 'flex',
    alignItems: 'center',
  },
  
  headerimg: {
    marginRight: '10px',
  },
  
  headerh1: {
    color: '#e1003c',
  },
});

export default Header;
