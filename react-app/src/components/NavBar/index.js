import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEdit, faUsers } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import SearchBar from './SearchBar';

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
            <div id="icon-div" >
                <FontAwesomeIcon id="icon" icon={faUsers}/>
            </div>
            <div id="search-bar-div" >
                <SearchBar />
            </div>
            {!user &&
                <div>
                    <NavLink to='/login' exact={true} activeClassName='active' >
                        Login
                    </NavLink>
                </div>
            }
            {!user &&
                <div>
                    <NavLink to='/sign-up' exact={true} activeClassName='active' >
                        Sign Up
                    </NavLink>
                </div>
            }
            {user && <NavLink to={`/users/${user.id}`} exact={true} >
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
