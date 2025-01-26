import React, { useContext } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import newContext from '../Context/context';

const Header = () => {
  const { user, logOut } = useContext(newContext);

  return (
    <header className={css(styles.Appheader)}>
      <img src={logo} alt="holberton logo" className={css(styles.headerimg)} />
      <h1 className={css(styles.headerh1)}>School dashboard</h1>
      {user.isLoggedIn && (
        <section id="logoutSection">
          <p>
            Welcome {user.email} <button onClick={logOut}>Logout</button>
          </p>
        </section>
      )}
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