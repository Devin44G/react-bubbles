import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const changeHandler = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  const loginHandler = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={loginHandler}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={changeHandler}
        />
        <input
          name="password"
          type="text"
          placeholder="Password"
          value={credentials.password}
          onChange={changeHandler}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
