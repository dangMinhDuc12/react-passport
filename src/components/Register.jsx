import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link, Redirect, useHistory} from "react-router-dom";
import api from "../utils/api";
import { setLogin } from "../slice/loginSlice";
import { useDispatch } from "react-redux";

const Register = props => {
  const token = localStorage.getItem('token')
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const history = useHistory()

  if(token) {
    return <Redirect to="/profile" />
  }

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
      const res = await api.post('/register', form)
      localStorage.setItem('token', res.data.token)
      dispatch(setLogin(true))
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
          <h3 className="text-center">Register Account</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User Name</label>
              <input name="name" onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input  name="email" onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input  name="password" onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input  name="password_confirmation" onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" />
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