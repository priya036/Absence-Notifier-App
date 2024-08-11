import React from 'react';
import Success from '../assets/success.gif'
import { Link } from 'react-router-dom';

import '../css/RegistrationSuccessPage.css';

const AdminRegistrationSucess = () => {
  return (
    <div className='back'>
    <div className="containers">
      <div className="registration-success">
      <div className="image">
            <img src={Success} alt="success" />
        </div>
        <br />
        <h2>Registration Successful!</h2>
        <p>Your account has been successfully registered.</p>
        <p>You can now log in using your credentials.</p>
        <Link to="/">Log In</Link>
      </div>
    </div>
    </div>
  );
};

export default AdminRegistrationSucess;
