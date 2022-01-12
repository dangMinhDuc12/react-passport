import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import LinkBootstrap from "./LinkBootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import api from "../utils/api";
import {setLogin} from "../slice/loginSlice";

const Nav = props => {
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.loginReducer.isLogin)
  const token = localStorage.getItem('token')
  if(token) {
    dispatch(setLogin(true))
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(setLogin(false))
  }
  

  const checkLogin = () => {
    if(isLogin) {
      return (
        <li className="nav-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
          Logout
        </li>
      )
    }

    return (
      <>
        <LinkBootstrap label="Login" to="/login"/>
        <LinkBootstrap label="Register" to="/register"/>
      </>
     )
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Laravel React Passport</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <LinkBootstrap label="Home" to="/"/>
            { isLogin &&  <LinkBootstrap label="Profile" to="/profile"/>}
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              { checkLogin() }
          </ul>
        </span>
        </div>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  
};

export default Nav;