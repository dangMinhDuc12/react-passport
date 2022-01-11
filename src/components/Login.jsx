import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom";
import api from '../utils/api'


const Login = props => {
  const history = useHistory()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await api.post('/login', form)
      localStorage.setItem('token', res.data.token)
      history.push('/profile')

    } catch (e) {
      console.log(e.response.data)
    }
  }




  return (
    <div>
      <br/>
      <br/>
      <div className="row">
        <div className="jumbotron col-lg-4 offset-lg-4">
          <h3 className="text-center">Login Account</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" name="email" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" name="password" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
            <p className="mt-5">Forgot Password ? <Link to="/forgot">Click Here</Link></p>
            <p className="mt-2">Don't Have Account ? <Link to="/register">Register Here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {

};

export default Login;