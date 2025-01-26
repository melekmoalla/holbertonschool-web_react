// src/Header/Header.jsx
import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import newContext from '../Context/context';



class Header extends Component {
  static contextType = newContext;

  render() {
    const { isLoggedIn, user, logOut } = this.context; // Destructure context

    return (

    <header className={css(styles.Appheader)}>
      <img src={logo} alt="holberton logo" />
      <h1 style={{ color: '#e1003c' }}>School dashboard</h1>
      {isLoggedIn && (
        
          <section id="logoutSection">
            <p>
              Welcome {user.email} <button onClick={logOut}>Logout</button>
            </p>
          </section>
        )}
    </header>
    
    );
  }
}

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
