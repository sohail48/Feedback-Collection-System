// server.js
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors())
// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to handle form submission
app.post('/submit', upload.single('resume'), (req, res) => {
  const { 
    firstName, 
    lastName, 
    email, 
    contact, 
    gender, 
    selectedOption, 
    subjects, 
    url, 
    about 
  } = req.body;

  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Email:', email);
  console.log('Contact:', contact);
  console.log('Gender:', gender);
  console.log('Selected Option:', selectedOption);
  console.log('Subjects:', subjects);
  console.log('Resume:', req.file); // Log resume file details
  console.log('URL:', url);
  console.log('About:', about);

  res.status(200).send('Form data received and logged.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
