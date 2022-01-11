import React from 'react';
import PropTypes from 'prop-types';


const Profile = props => {
  return (
    <div>
      <br/>
      <br/>
      <div className="row">
        <div className="jumbotron col-lg-4 offset-lg-4">
          <h3 className="text-center">User Profile</h3>
          <ul className="list-group">
            <li className="list-group-item">Name: name</li>
            <li className="list-group-item">Email: email</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  
};

export default Profile;