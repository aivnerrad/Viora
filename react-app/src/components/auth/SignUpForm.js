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
      if (password === repeatPassword) {
        const data = await dispatch(signUp(firstName, lastName, email, password));
        if (data) {
          setErrors(data)
        }
        // const formData = new FormData();
        // formData.append("image", image);
        // const res = await fetch('/api/images', {
        //     method: "POST",
        //     body: formData,
        // });
        // if (res.ok) {
        //     await res.json();
        // }
      }
  };
  console.log("ERRORS ======>>>", errors)
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
    <form id="signup-form" onSubmit={onSignUp}>
      <div id="signup-inner-form">
        <div id="home-button-div">
          <NavLink id="home-button" to='/' exact={true} activeClassName='active'>
              Viora
          </NavLink>
        </div>
        <br/>
        <div id="errors-div">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div id="input">
          <label>First Name</label>
          <input id="input-line"
            type='text'
            name='firstName'
            placeholder="Enter Your First Name..."
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div id="input">
          <label>Last Name</label>
          <input id="input-line"
            type='text'
            name='lastName'
            placeholder="Enter Your Last Name..."
            onChange={updateLastName}
            value={lastName}
          ></input>
        </div>
        <div id="input">
          <label>Email</label>
          <input id="input-line"
            type='text'
            name='email'
            placeholder="Enter Your Email Address..."
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div id="input">
          <label>Password</label>
          <input id="input-line"
            type='password'
            name='password'
            placeholder="Enter A Password..."
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div id="input">
          <label>Repeat Password</label>
          <input id="input-line"
            type='password'
            name='repeat_password'
            placeholder="Confirm Your Password..."
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button id="login-button" type='submit'>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
