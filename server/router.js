// router.js
const express = require('express');
const router = express.Router();
const facultyController = require('./controllers/facultycontroller');
const studentController = require('./controllers/studentcontroller');
const attendanceController = require('./controllers/attendancecontroller');
const imageController = require('./controllers/imagecontroller');


router.get('/api/login', facultyController.checkFacultyLogin);
router.post('/api/register/faculty', facultyController.registerFaculty);
router.post('/api/register/student', studentController.registerStudent);
router.post('/api/upload', imageController.handleImageUpload);

module.exports = router;
