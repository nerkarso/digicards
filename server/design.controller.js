const { Router } = require('express');
const uuidV4 = require('uuid/v4');
const router = Router();

/**
 * Get all the rows
 *
 * GET /api/designs
 */
router.get('/', async function findAll(req, res) {
  try {
    // Query the database
    const [rows] = await res.db.query('SELECT * FROM designs ORDER BY updated DESC');
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
 * POST /api/designs
 */
router.post('/', async function create(req, res) {
  const { account_id } = req.body;
  const uuid = uuidV4();
  try {
    // Query the database
    const [result] = await res.db.query(
      `
      INSERT INTO designs (uuid, account_id)
      VALUES (?, ?)
    `,
      [uuid, account_id],
    );
    // Success
    res.json({
      ...result,
      uuid: uuid,
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
 * GET /api/designs/xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxxxxxxx
 */
router.get('/:uuid', async function findOne(req, res) {
  const { uuid } = req.params;
  try {
    // Query the database
    const [rows] = await res.db.query('SELECT * FROM designs WHERE uuid = ?', [uuid]);
    // Check if there are rows
    if (rows.length > 0) {
      // Success
      res.json(rows[0]);
    } else {
      // Error
      res.json({
        error: 'No design found',
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
 * PUT /api/designs/xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxxxxxxx
 */
router.put('/:uuid', async function update(req, res) {
  const { uuid } = req.params;
  const { title, data, thumbnail } = req.body;
  try {
    // Query the database
    let results = {};
    if (title) {
      const [result] = await res.db.query('UPDATE designs SET title = ? WHERE uuid = ?', [title, uuid]);
      results['title'] = result;
    }
    if (data) {
      const [result] = await res.db.query('UPDATE designs SET data = ? WHERE uuid = ?', [data, uuid]);
      results['data'] = result;
    }
    if (thumbnail) {
      const [result] = await res.db.query('UPDATE designs SET thumbnail = ? WHERE uuid = ?', [thumbnail, uuid]);
      results['thumbnail'] = result;
    }
    // Success
    res.json(results);
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
 * DELETE /api/designs/xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxxxxxxx
 */
router.delete('/:uuid', async function remove(req, res) {
  const { uuid } = req.params;
  try {
    // Query the database
    const [result] = await res.db.query(`DELETE FROM designs WHERE uuid = ?`, [uuid]);
    // Success
    res.json(result);
  } catch (error) {
    // Error
    res.json({
      error: error.message,
    });
  }
});

module.exports = router;
