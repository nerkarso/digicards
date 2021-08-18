// Load the environment variables
require('dotenv').config();

const cors = require('cors');
const express = require('express');
const path = require('path');
const { createConnection } = require('./database');

async function createServer() {
  // Creat a new Express instance
  const app = express();

  // Enable CORS
  app.use(cors());

  // Parses JSON body
  app.use(express.json());

  // Serve the static files from the public folder
  app.use(express.static(path.resolve(__dirname, '..', 'public')));

  // Establish a connection with the database
  const connection = await createConnection();

  // Check if there is a database connection
  if (connection) {
    // Routes
    app.use('/api/designs', require('./design.controller'));
    app.use('/api/accounts', require('./account.controller'));
  }

  // Start the Express server
  await app.listen(3000);
  console.log('[Express] Server running on http://localhost:3000');
}

createServer();
