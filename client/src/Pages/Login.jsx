import React, { useState } from 'react';
import axios from 'axios';
import '../css/signup.css';
import signup from '../assets/signup.png';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [facultyInfo, setFacultyInfo] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyInfo({
      ...facultyInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:4000/api/login?email=${facultyInfo.email}&password=${facultyInfo.password}`);

      if (response.status === 200) {
        console.log('Authentication successful');
        toast('Login successful');
        window.location = '/home'; 
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Incorrect email or password');

    }
  };

  return (
    <div className='back'>
    <div className="container">
      <div className="form-container">
        <div className="left">
          <h2 align="center">LOGIN</h2>
          <h2 align="center">Messaging App</h2>
          <br />

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={facultyInfo.email}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={facultyInfo.password}
              onChange={handleChange}
              className="input-field"
              required
            />
            <button type="submit" className="submit-buttons">
              Login
            </button>
          </form>
          <div className="link">
            New user? <Link to="/signup" className="signup-link">
              Sign up here
            </Link>
          </div>
        </div>

        <div className="right">
          <img src={signup} alt="Faculty" className="image-container" />
        </div>
      </div>
      <ToastContainer autoClose={5000} position="top-center" /> {/* Properly set up ToastContainer */}
    </div>
    </div>
  );
}

export default Login;
