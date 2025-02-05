import React, { useState } from 'react';
import WithLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';

const Login = (props) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    props.logIn(email, password);
  };

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    setFormData((prevData) => {
      const updatedData = { ...prevData, email: newEmail };
      validateForm(updatedData);
      return updatedData;
    });
  };

  const handleChangePassword = (event) => {
    const newPassword = event.target.value;
    setFormData((prevData) => {
      const updatedData = { ...prevData, password: newPassword };
      validateForm(updatedData);
      return updatedData;
    });
  };

  const validateForm = (data) => {
    const { email, password } = data;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8;
    setEnableSubmit(isEmailValid && isPasswordValid);
  };

  const { email, password } = formData;

  return (
    <div className={css(styles.Appbody)}>
      <div className={css(styles.longbr)}></div>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.Appbodyform)} onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
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
  disabled: {
    backgroundColor: "#c0c0c0",
    cursor: "not-allowed",
  },
});

export default WithLogging(Login);