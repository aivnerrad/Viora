import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState('');
  const [imageLoading, setImageLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory(); // so that we can redirect after the image upload is successful

    const onSignUp = async (e) => {
      e.preventDefault();
        if (firstName && lastName && email && password === repeatPassword){
          const data = await dispatch(signUp(firstName, lastName, email, password));
          if (data) {
            setErrors(data)
          }
        }
        else if(firstName && lastName && email && password !== repeatPassword) {
          setErrors(["Passwords do not match"])
        }
      else setErrors(await dispatch(signUp(firstName, lastName, email, password)))
    };
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="page-height">
    <div id="background">
    <form id="signup-form" onSubmit={onSignUp}>
      <div id="signup-inner-form">
        <div id="home-button-div">
          <NavLink id="home-button" to='/' exact={true} activeClassName='active'>
              Viora
          </NavLink>
        </div>
        <p><strong>Sign up to get your question answered!</strong></p>
        <br/>
        <div id="errors-div">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div id="input">
          <label>First Name</label>
          <input id="input-line" autoComplete="off"
            type='text'
            name='firstName'
            placeholder="Enter Your First Name..."
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div id="input">
          <label>Last Name</label>
          <input id="input-line" autoComplete="off"
            type='text'
            name='lastName'
            placeholder="Enter Your Last Name..."
            onChange={updateLastName}
            value={lastName}
          ></input>
        </div>
        <div id="input">
          <label>Email</label>
          <input id="input-line" autoComplete="off"
            type='email'
            name='email'
            placeholder="Enter Your Email Address..."
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div id="input">
          <label>Password</label>
          <input id="input-line" autoComplete="off"
            type='password'
            name='password'
            placeholder="Enter A Password..."
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div id="input">
          <label>Repeat Password</label>
          <input id="input-line" autoComplete="off"
            type='password'
            name='repeat_password'
            placeholder="Confirm Your Password..."
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button id="login-button" type='submit'>Sign Up</button>
        <div id="fake-quote">
          <p id="fake-quote-text"><strong>"I love using Viora! I can find an answer to almost any question I ask!"</strong><br/><i>-"Actual Viora User"</i></p>
        </div>
      </div>
    </form>
  </div>
  </div>
  );
};

export default SignUpForm;
