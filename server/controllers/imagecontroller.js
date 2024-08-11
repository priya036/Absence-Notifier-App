const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const handleImageUpload = (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: 'Image upload failed' });
    } else if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (req.file) {
      return res.json({ message: 'Image uploaded successfully' });
    } else {
      return res.status(400).json({ message: 'Image upload failed' });
    }
  });
};

module.exports = {
  handleImageUpload,
};
