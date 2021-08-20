const { Router } = require('express');
const router = Router();

/**
 * Get all the rows
 *
 * GET /api/accounts
 */
router.get('/', async function findAll(req, res) {
  try {
    // Query the database
    const [rows] = await res.db.query('SELECT * FROM accounts');
    // Success
    res.json(rows);
  } catch (error) {
    // Error
    res.json({
      error: error.message,
    });
  }
});

/**
 * Create a new row
 *
 * POST /api/accounts
 */
router.post('/', async function create(req, res) {
  const { first_name, last_name, email, password } = req.body;
  try {
    // Query the database
    const [result] = await res.db.query(
      `
      INSERT INTO accounts
        (first_name, last_name, email, password, role)
      VALUES
        (?, ?, ?, ?, ?)
    `,
      [first_name, last_name, email, password, 1],
    );
    // Success
    res.json({
      rows_inserted: result.affectedRows,
    });
  } catch (error) {
    // Error
    res.json({
      error: error.message,
    });
  }
});

/**
 * Get a row
 *
 * GET /api/accounts/1
 */
router.get('/:id', async function findOne(req, res) {
  const { id } = req.params;
  try {
    // Query the database
    const [rows] = await res.db.query('SELECT * FROM accounts WHERE id = ?', [id]);
    // Check if there are rows
    if (rows.length > 0) {
      // Success
      res.json(rows[0]);
    } else {
      res.json({
        error: 'No rows found',
      });
    }
  } catch (error) {
    // Error
    res.json({
      error: error.message,
    });
  }
});

/**
 * Update a row
 *
 * PUT /api/accounts/1
 */
router.put('/:id', async function update(req, res) {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;
  try {
    // Query the database
    const [result] = await res.db.query(
      `
      UPDATE accounts
      SET first_name = ?, last_name = ?, email = ?, password = ?
      WHERE id = ?
    `,
      [first_name, last_name, email, password, id],
    );
    // Success
    res.json({
      rows_updated: result.affectedRows,
    });
  } catch (error) {
    // Error
    res.json({
      error: error.message,
    });
  }
});

/**
 * Delete a row
 *
 * DELETE /api/accounts/1
 */
router.delete('/:id', async function remove(req, res) {
  const { id } = req.params;
  try {
    // Query the database
    const [result] = await res.db.query(`DELETE FROM accounts WHERE id = ?`, [id]);
    // Success
    res.json({
      rows_deleted: result.affectedRows,
    });
  } catch (error) {
    // Error
    res.json({
      error: error.message,
    });
  }
});

/**
 * Authentication
 *
 * POST /api/accounts/auth
 */
router.post('/auth', async function findAll(req, res) {
  const { email, password } = req.body;
  try {
    // Query the database
    const [rows] = await res.db.query(
      `
      SELECT * FROM accounts
      WHERE email = ? AND password = ?
    `,
      [email, password],
    );
    // Check if there are rows
    if (rows.length > 0) {
      // Success
      res.json(rows[0]);
    } else {
      res.json({
        error: 'Incorrect email or password',
      });
    }
  } catch (error) {
    // Error
    res.json({
      error: error.message,
    });
  }
});

module.exports = router;
