import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import UploadPicture from '../UploadPicture';

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




  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image);

      // aws uploads can be a bit slow—displaying
      // some sort of loading message is a good idea
      setImageLoading(true);

      const res = await fetch('/api/images', {
          method: "POST",
          body: formData,
      });
      if (res.ok) {
          await res.json();
          setImageLoading(false);
          history.push("/images");
      }
      else {
          setImageLoading(false);
          // a real app would probably use more advanced
          // error handling
          console.log("error");
      }
  }

  const updateImage = (e) => {
      const file = e.target.files[0];
      setImage(file);
  }

  return (
      <form id="image-upload" onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={updateImage}
          />
          <button id="image-upload" type="submit">Submit</button>
          {(imageLoading)&& <p>Loading...</p>}
      </form>
  )





  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, email, password));
      if (data) {
        setErrors(data)
      }
    }
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
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          onChange={updateFirstName}
          value={firstName}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          onChange={updateLastName}
          value={lastName}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Profile Picture</label>
        <UploadPicture />
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
