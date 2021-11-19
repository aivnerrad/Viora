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

  const enterDemoUser = async (e) => {
    e.preventDefault();
    dispatch(login("demo@aa.io", "password"))
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
    <div id="page-height">
    <div id="background">
    <form id="login-form" onSubmit={onLogin}>
      <div id="inner-form">
      <div id="home-button-div">
          <NavLink id="home-button" to='/' exact={true} activeClassName='active'>
              Viora
          </NavLink>
        </div>
        <p><strong>Where Your <u>Questions</u> Find <u>Answers</u>!</strong></p>
        <p><strong>Sign up or log in to get your question answered!</strong></p>
        <br/>
        <div id="input-errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div id="input">
          <label htmlFor='email'>Email</label>
          <input id="input-line" autoComplete="off"
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div id="input">
          <label htmlFor='password'>Password</label>
          <input id="input-line" autoComplete="off"
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
        <div id="fake-quote">
          <p id="fake-quote-text"><strong>"I love using Viora! I can find an answer to almost any question I ask!"</strong><br/><i>-"Actual Viora User"</i></p>
        </div>
      </div>
    </form>
  </div>
  </div>
  );
};

export default LoginForm;
