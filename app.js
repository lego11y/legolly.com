// Require the necessary modules
const express = require('express');
var fs = require('fs');
var path = require('path');

// const bodyParser = require('body-parser');

// Create the Express app
const app = express();

// Use middleware to parse request bodies
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

var templateContent = fs.readFileSync(path.join(__dirname, './html') + '/index.html', 'utf8');

// Define a route to handle GET requests
app.get('/', (req, res) => {
  res.send(templateContent)
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

