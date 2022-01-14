import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import api from "../utils/api";

const Forgot = props => {

  const [form, setForm] = useState({})
  const [msg, setMsg] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
    try {
      const res = await api.post('/forgot-password', form)
      setMsg({
        status: 'success',
        message: res.data.message
      })
    } catch (e) {
      setMsg({
        status: 'danger',
        message: e.response.data.message
      })
    }
  }

  return (
    <div>
      <br/>
      <br/>
      <div className="row">
        <div className="jumbotron col-lg-4 offset-lg-4">
          <h3 className="text-center">Forgot Password Account</h3>
          <div className={ `alert alert-${msg.status} ${msg.message ? '' : 'd-none'}` } role="alert">
            {msg.message}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input name="email" onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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