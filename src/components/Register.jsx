import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Register = props => {
  return (
    <div>
      <br/>
      <br/>
      <div className="row">
        <div className="jumbotron col-lg-4 offset-lg-4">
          <h3 className="text-center">Register Account</h3>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User Name</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Register</button>
            <p className="mt-5">Have An Account? <Link to="/login">Login Here</Link></p>
            <p className="mt-2">Forgot Password ? <Link to="/forgot">Click Here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {

};

export default Register;