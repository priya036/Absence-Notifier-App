const Student = require('../models/students');

const registerStudent = async (req, res) => {
  try {
    const { studentName, rollNumber, className, section, mobileNumber } = req.body;

    const existingStudent = await Student.findOne({ rollNumber });
    if (existingStudent) {
      return res.status(400).json({ error: 'Student with the same roll number already exists' });
    }

    const student = new Student({
      studentName,
      rollNumber,
      className,
      section,
      mobileNumber,
    });

    await student.save();
    res.sendStatus(201); 
  } catch (error) {
    res.status(500).json({ error: error.message }); 
    console.log(error)
  }
};
async function sendMessagesToAbsentStudents(req, res) {
  try {
    const apiKey = 'api-key';

    const messageData = {
      apiKey,
      numbers: ['+91XXXXXXXXXX', '+91YYYYYYYYYY'], 
      message: 'Your son {name} is absent for todays class {date.now()}',
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
  registerStudent, 
  sendMessagesToAbsentStudents,
};
