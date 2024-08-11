const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
  },
  rollNumber: {
    type: String,
    unique: true,
  },
  className: {
    type: String,
  },
  section: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
