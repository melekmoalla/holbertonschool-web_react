// src/Login/Login.jsx
import React from 'react';
import WithLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';


const Login = () => {
  return (
    <div className={css(styles.Appbody)}>
      <div className={css(styles.longbr)}></div>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.Appbodyform)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">OK</button>
      </form>
    </div>
  );
};

const styles = StyleSheet.create({
  Appbody: {
    marginTop: '20px',
  },

  longbr: {
    borderTop: '1px solid red',
    marginBottom: '20px',
  },
  
  Appbodyform: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  },
  
  button: {
    marginTop: '15px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      fontSize: '14px',
    },
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },  
});


export default WithLogging(Login);