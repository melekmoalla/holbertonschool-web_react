// src/Login/Login.jsx
import React, { Component, useState } from 'react';
import WithLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      enableSubmit: false,
    };


    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.validateForm = this.validateForm.bind(this);

  }

  handleLoginSubmit(){
    this.setState({ loggedIn: true });
  }
  
  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.validateForm);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.validateForm);
  }

  validateForm() {
    const { email, password } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8;

    this.setState({ enableSubmit: isEmailValid && isPasswordValid });
  }

  render() {
    
    const { email, password, enableSubmit } = this.state;

    return (
      <div className={css(styles.Appbody)}>
        <div className={css(styles.longbr)}></div>
        <p>Login to access the full dashboard</p>
        <form
          className={css(styles.Appbodyform)}
          onSubmit={this.handleLoginSubmit}
        >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
          />
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
            className={css(styles.button, !enableSubmit && styles.disabled)}
          />
        </form>
      </div>
    );
  }
}


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
  disabled: {
    backgroundColor: "#c0c0c0",
    cursor: "not-allowed",
  },
});


export default WithLogging(Login);