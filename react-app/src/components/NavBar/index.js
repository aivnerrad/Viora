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
            <div id="home-button-div">
                <NavLink id="home-button" to='/' exact={true} activeClassName='active'>
                    Viora
                </NavLink>
            </div>
            <div id="icon-div" >
                <NavLink to='/'exact={true} >
                    <FontAwesomeIcon id="icon" icon={faHome}/>
                </NavLink>
            </div>
            <div id="icon-div" >
                <NavLink to='/answer' >
                    <FontAwesomeIcon id="icon" icon={faEdit}/>
                </NavLink>
            </div>
            {!user &&
                <div>
                    <NavLink id="nav-login-button" to='/login' exact={true} activeClassName='active' >
                        Login
                    </NavLink>
                </div>
            }
            {!user &&
                <div>
                    <NavLink id="nav-login-button" to='/sign-up' exact={true} activeClassName='active' >
                        Sign Up
                    </NavLink>
                </div>
            }
            {user && <NavLink to={`/`} exact={true} >
            <div id='my-profile-circle-div'>
                <p>{user && user.firstName[0]}</p>
            </div>
            </NavLink>}
            {user &&
                <div>
                    <LogoutButton />
                </div>
            }
            </nav>
    );
}

export default NavBar;
