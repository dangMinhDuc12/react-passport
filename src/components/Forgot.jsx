import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Forgot = props => {
  return (
    <div>
      <br/>
      <br/>
      <div className="row">
        <div className="jumbotron col-lg-4 offset-lg-4">
          <h3 className="text-center">Forgot Password Account</h3>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="mt-5">Have An Account? <Link to="/login">Login Here</Link></p>
            <p className="mt-2">Don't Have Account ? <Link to="/register">Register Here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

Forgot.propTypes = {

};

export default Forgot;