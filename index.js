// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Set up a route to respond to requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is a simple Node.js app running on Jenkins!');
});

// Define the port to listen on
const port = 8080;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
