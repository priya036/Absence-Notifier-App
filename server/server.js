const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 4000;

app.use(cors());

mongoose.connect('mongodb+srv://aruneshj07:arun@absence-notification.gpl8e.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const Faculty = require('./models/faculty');
const Student = require('./models/students');
const Attendance = require('./models/attendance');

app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({ message: 'Image uploaded successfully' });
  } else {
    res.status(400).json({ message: 'Image upload failed' });
  }
});

const router = require('./router');
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
