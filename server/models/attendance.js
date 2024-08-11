const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  classes: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  isPresent: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('Attendance', attendanceSchema);
