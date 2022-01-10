import React from 'react';
import PropTypes from 'prop-types';
import LinkBootstrap from "./LinkBootstrap";

const Nav = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Laravel React Passport</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <LinkBootstrap label="Home" to="/"/>
            <LinkBootstrap label="Profile" to="/profile"/>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <LinkBootstrap label="Login" to="/login"/>
              <LinkBootstrap label="Register" to="/register"/>
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