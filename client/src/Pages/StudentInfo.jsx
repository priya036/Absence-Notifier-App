import React, { useState } from 'react';
import axios from 'axios';
import '../css/studadd.css';
import studentLogo from '../assets/studicon.png';
import Nav from '../Components/Nav';


function StudentInfo() {
  const [studentInfo, setStudentInfo] = useState({
    studentName: '',
    rollNumber: '',
    className: '',
    section: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://absence-notifier-api.onrender.com/api/register/student', studentInfo);

      if (response.status === 201) {
        console.log('Student information saved successfully');
      } else {
        console.error('Failed to save student information');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
            <div className='mt-[-80px]'><Nav/></div>

    <div className="center-container">
      <img src={studentLogo} alt="Student Logo" className="student-logo" />
      <h2>Student Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>NAME</label>
          <input
            type="text"
            name="studentName"
            value={studentInfo.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>ROLL NUMBER</label>
          <input
            type="text"
            name="rollNumber"
            value={studentInfo.rollNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>CLASS</label>
          <input
            type="text"
            name="className"
            value={studentInfo.className}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>SECTION</label>
          <input
            type="text"
            name="section"
            value={studentInfo.section}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>MOBILE NUMBER</label>
          <input
            type="text"
            name="mobileNumber"
            value={studentInfo.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
    </>
  );
}

export default StudentInfo;
