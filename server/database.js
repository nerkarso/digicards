const { createConnection } = require('mysql2/promise');

/**
 * Establish a connection with the database
 *
 * @returns connection | null
 */
exports.createConnection = async function () {
  try {
    const connection = await createConnection({
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('[Database] Connection established');
    return connection;
  } catch (error) {
    console.error('[Database] Error: ', error.message);
    return null;
  }
};
