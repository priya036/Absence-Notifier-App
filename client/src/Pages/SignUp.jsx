import React, { useState } from 'react';
import axios from 'axios';
import '../css/signup.css';
import signup from '../assets/signup.png';
import { Link , useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [facultyInfo, setFacultyInfo] = useState({
    name: '',
    designation: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyInfo({
      ...facultyInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (facultyInfo.password !== facultyInfo.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://absence-notifier-api.onrender.com/api/register/faculty', facultyInfo);

      if (response.status === 201) {
        toast.success('Faculty registration successful');
        navigate('/regisucess')
      } else if (response.status === 400) {
        toast.error('Email already exists');
      } else {
        toast.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Check the Password is Same or Email may be exit');
    }
  };

  return (
    <div className='back'>
    <div className="container">
      <div className="form-container">
        <div className="left">
          <h2 align="center">SIGNUP</h2>
          <h2 align="center">Messaging App</h2>
          <br />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={facultyInfo.name}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="text"
              name="designation"
              placeholder="Designation"
              value={facultyInfo.designation}
              onChange={handleChange}
              className="input-field"
              required
            />
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
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={facultyInfo.confirmPassword}
              onChange={handleChange}
              className="input-field"
              required
            />
            <button type="submit" className="submit-buttons">
              Sign Up
            </button>
          </form>
          <div className="link">
            Already a User ?{' '}
            <Link to="/" className="signup-link">
              Login Here
            </Link>
          </div>
        </div>

        <div className="right">
          <img src={signup} alt="Faculty" className="image-container" />
        </div>
      </div>
      <ToastContainer autoClose={5000} position="top-center" />
    </div>
    </div>
  );
}

export default Signup;
