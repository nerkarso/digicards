const { createConnection } = require('mysql2/promise');

/**
 * Middleware to establish a connection with the database
 */
exports.createConnection = async function (req, res, next) {
  res.db = null;
  try {
    // Pass the connection
    res.db = await createConnection({
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('[Database] Connection established');
  } catch (error) {
    console.error('[Database] Error: ', error.message);
  }
  next();
};
