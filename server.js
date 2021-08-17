const path = require('path');
const express = require('express');

function createServer() {
  const app = express();

  // Server the static files from the public folder
  app.use(express.static(path.join(__dirname, 'public')));

  // Start the Express web server
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}

createServer();
