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

  // Middleware for parsing application/json
  app.use(express.json({ limit: '100mb' }));
  // Middleware for parsing application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  // Serve the static files from the public folder
  app.use(express.static(path.resolve(__dirname, '..', 'public')));
  app.use(express.static(path.resolve(__dirname, '..', 'editor', 'dist')));

  // Design editor
  app.get('/editor*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'editor', 'dist', 'index.html'));
  });

  // Design preview
  app.get('/preview*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'editor', 'dist', 'preview.html'));
  });

  // Establish a connection with the database
  app.use(createConnection);

  // Routes
  app.use('/api/designs', require('./design.controller'));
  app.use('/api/accounts', require('./account.controller'));

  // Start the Express server
  await app.listen(3000);
  console.log('[Express] Server running on http://localhost:3000');
}

createServer();
