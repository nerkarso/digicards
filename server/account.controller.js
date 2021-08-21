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
  const { first_name, last_name, email, password, image_url } = req.body;
  try {
    // Query the database
    const [result] = await res.db.query(
      `
      INSERT INTO accounts
        (first_name, last_name, email, password, image_url, role)
      VALUES
        (?, ?, ?, ?, ?, ?)
    `,
      [first_name, last_name, email, password, image_url, 1],
    );
    // Send cookie to client
    const account = {
      id: result.insertId,
      first_name: first_name,
      last_name: last_name,
      email: email,
      image_url: image_url,
      role: 1,
    };
    res.cookie('account', JSON.stringify(account), {
      expires: getExpireDate(7), // Expires in 7 days
    });
    // Success
    res.json(result);
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
      // Error
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
  const { first_name, last_name, email, password, image_url } = req.body;
  try {
    // Query the database
    const [result] = await res.db.query(
      `
      UPDATE accounts
      SET first_name = ?, last_name = ?, email = ?, password = ?, image_url = ?
      WHERE id = ?
    `,
      [first_name, last_name, email, password, image_url, id],
    );
    // Success
    res.json(result);
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
    res.json(result);
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
      SELECT id, first_name, last_name, email, image_url, role FROM accounts
      WHERE email = ? AND password = ?
    `,
      [email, password],
    );
    // Check if there are rows
    if (rows.length > 0) {
      // Send cookie to client
      res.cookie('account', JSON.stringify(rows[0]), {
        expires: getExpireDate(7), // Expires in 7 days
      });
      // Success
      res.json(rows[0]);
    } else {
      // Error
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

/**
 * Calculate expire date
 */
function getExpireDate(days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  return date;
}

module.exports = router;
