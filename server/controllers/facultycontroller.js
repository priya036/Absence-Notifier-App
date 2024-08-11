const Faculty = require('../models/faculty');

// Function to register a faculty member
const registerFaculty = async (req, res) => {
  try {
    const { name, designation, email, password } = req.body;
    const existingFaculty = await Faculty.findOne({ email });
    if (existingFaculty) {
      return res.status(400).json({ error: 'Faculty with the same email already exists' });
    }

    const faculty = new Faculty({
      name,
      designation,
      email,
      password, // Store the password as-is (without hashing)
    });

    await faculty.save();
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const checkFacultyLogin = async (req, res) => {
  try {
    const { email, password } = req.query; // Retrieve data from query parameters

    if (!email || !password) {
      return res.status(400).json({ message: 'Invalid request' });
    }

    const faculty = await Faculty.findOne({ email });

    if (!faculty) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    if (faculty.password === password) {
      res.status(200).json({ message: 'Authentication successful' });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  registerFaculty,
  checkFacultyLogin,
};
