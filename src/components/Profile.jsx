import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import api from "../utils/api";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = props => {
  const token = localStorage.getItem('token')
  const isLogin = useSelector(state => state.loginReducer.isLogin)
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if(token) {
      (async () => {
        try {
          const res = await api.get('/profile')
          const { email, name } = res.data
          setProfile({
            email,
            name
          })

        } catch (e) {
          console.log(e.response)
        }
      })()
    }

  }, [])

  if(!token || !isLogin) {
    return <Redirect to="/login" />
  }


  return (
    <div>
      <br/>
      <br/>
      <div className="row">
        <div className="jumbotron col-lg-4 offset-lg-4">
          <h3 className="text-center">User Profile</h3>
          <ul className="list-group">
            <li className="list-group-item">Name: { profile.name }</li>
            <li className="list-group-item">Email: { profile.email }</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  
};

export default Profile;