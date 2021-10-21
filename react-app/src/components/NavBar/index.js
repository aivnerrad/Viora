
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEdit } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <nav>
      <div>
        <NavLink id="home-button" to='/' exact={true} activeClassName='active'>
          Viora
        </NavLink>
      </div>
      <div id="home-icon-div">
        <NavLink to='/' exact={true}>
          <FontAwesomeIcon id="home-icon" icon={faHome} />
        </NavLink>
      </div>
      <div id="answer-question-icon-div">
        <NavLink to='/answer'>
          <FontAwesomeIcon id="answer-icon" icon={faEdit} />
        </NavLink>
      </div>
      {!user && <div>
        <NavLink to='/login' exact={true} activeClassName='active'>
          Login
        </NavLink>
      </div>}
      {!user && <div>
        <NavLink to='/sign-up' exact={true} activeClassName='active'>
          Sign Up
        </NavLink>
      </div>}
      <div>
        <NavLink to='/users' exact={true} activeClassName='active'>
          Users
        </NavLink>
      </div>
      {user && <div> <LogoutButton /> </div>}
    </nav>
  );
}

export default NavBar;
