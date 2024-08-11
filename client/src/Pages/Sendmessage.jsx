import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../Components/Nav';
import '../css/sendsms.css';

function SendSms() {
  const [rollNumber, setRollNumber] = useState('');
  const [studentData, setStudentData] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setRollNumber(e.target.value);
  };

  const fetchStudentData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/student/${rollNumber}`);

      if (response.status === 200) {
        setStudentData(response.data);
      } else {
        setMessage('Student not found');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };

  const sendSms = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/send-sms', {
        rollNumber,
      });

      if (response.status === 200) {
        setMessage('SMS sent successfully');
      } else {
        setMessage('Failed to send SMS');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to send SMS');
    }
  };

  return (
    <>
            <div className='mt-[20px]'><Nav/></div>

    <div className='back-blue'>
    <div className="container">
      <div className="form-container">
        <div className="left">
          <h2 align='center'>Send SMS to Absent Students</h2><br />
          <form>
            <input
              type="text"
              placeholder="Enter Roll Number"
              value={rollNumber}
              onChange={handleChange}
              className="input-field"
            />
            <button onClick={fetchStudentData} className="submit-button">Fetch Student Data</button>
          </form>
          {studentData.name && (
            <div>
              <h3>Student Details</h3>
              <p>Name: {studentData.name}</p>
              <p>Class: {studentData.className}</p>
              <p>Section: {studentData.section}</p>
            </div>
          )}
        </div>

        <div className="right">
          <button onClick={sendSms} className="submit-button">Send SMS</button>
          <p>{message}</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default SendSms;
