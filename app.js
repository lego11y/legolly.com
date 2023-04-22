// Require the necessary modules
const express = require('express');
// const bodyParser = require('body-parser');

// Create the Express app
const app = express();

// Use middleware to parse request bodies
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Define a route to handle GET requests
app.get('/', (req, res) => {
  res.sendFile('/Users/aj/Development/Web/Legolly.com/html/index.html')
});

// // Define a route to handle POST requests
// app.post('/submit', (req, res) => {
//   const { name, email } = req.body;
//   res.send(`Thanks for submitting your information, ${name} (${email})!`);
// });



// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

