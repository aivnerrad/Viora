import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const enterDemoUser = (e) => {
    e.preventDefault();
    setEmail("demo@aa.io")
    setPassword("password")
    return dispatch(login(email, password))
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form id="login-form" onSubmit={onLogin}>
      <div id="inner-form">
      <div id="home-button-div">
          <NavLink id="home-button" to='/' exact={true} activeClassName='active'>
              Viora
          </NavLink>
        </div>
        <br/>
        <div id="input-errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div id="input">
          <label htmlFor='email'>Email</label>
          <input id="input-line"
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div id="input">
          <label htmlFor='password'>Password</label>
          <input id="input-line"
            name='password'
            type='password'
            placeholder='Enter Your Password...'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div id="login-demo-buttons-div">
          <button id="login-button" type='submit'>Login</button>
          <button id="demo-user-button" type="submit" onClick={enterDemoUser}>Demo User</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
