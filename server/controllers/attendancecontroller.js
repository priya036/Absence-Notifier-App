const apiKey = 'your-api-key'; 
const axios = require('axios');
const Attendance = require('../models/attendance');

exports.markAttendance = async (req, res) => {
  try {
    const { studentId, classes, isPresent } = req.body;
    
    const existingStudent = await Student.findById(studentId);
    if (!existingStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const attendance = new Attendance({
      student: existingStudent._id,
      classes,
      isPresent,
    });

    await attendance.save();
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function sendMessagesToAbsentStudents(req, res) {
  try {
    const { absentStudents } = req.body;

    if (!absentStudents || absentStudents.length === 0) {
      return res.status(400).json({ message: 'No absent students provided' });
    }

    const messageContent = 'Your son/daughter is absent for today'; 

    const messageData = {
      apiKey,
      numbers: absentStudents, 
      message: messageContent,
      sender: 'AI-Department',
    };

    const response = await axios.post('https://api.textlocal.in/send', messageData);

    if (response.data.status === 'success') {
      res.json({ message: 'Messages sent successfully' });
    } else {
      res.status(500).json({ message: 'Failed to send messages' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to send messages' });
  }
}

module.exports = {
  sendMessagesToAbsentStudents,
};

