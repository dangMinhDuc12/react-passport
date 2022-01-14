import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory, useParams} from "react-router-dom";
import api from "../utils/api";

const Reset = props => {
  const [form, setForm] = useState({})
  const [errMsg, setErrMsg] = useState('')
  const { token } = useParams()
  const history = useHistory()


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
    await api.post('/reset-password', {
      token,
      ...form
    })
    history.push('/login')
  } catch (e) {
    const msg = Object.values(e.response.data.message).reduce((acc, val) => {
      acc.push(...val)
      return acc
    }, []).join(',')
    setErrMsg(msg)
  }
}


  return (
    <div>
      <br/>
      <br/>
      <div className="row">
        <div className="jumbotron col-lg-4 offset-lg-4">
          <div className={ `alert alert-danger ${errMsg ? '' : 'd-none'}` } role="alert">
            {errMsg}
          </div>
          <h3 className="text-center">Reset Password</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Password</label>
              <input type="password" className="form-control" name="password" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password Confirm</label>
              <input type="password" className="form-control" name="password_confirmation" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="mt-5">Have Account ? <Link to="/login">loginHere</Link></p>
            <p className="mt-2">Don't Have Account ? <Link to="/register">Register Here</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

Reset.propTypes = {

};

export default Reset;