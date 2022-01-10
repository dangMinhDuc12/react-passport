import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Login = props => {
  return (
    <div>
      <br/>
      <br/>
      <div className="row">
        <div className="jumbotron col-lg-4 offset-lg-4">
          <h3 className="text-center">Login Account</h3>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
            <p className="mt-5">Forgot Password ? <Link to="/forgot">Click Here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {

};

export default Login;