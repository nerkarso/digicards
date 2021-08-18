const { Router } = require('express');

// Map the routes
const router = Router();
router.route('/').get(findAll).post(create);
router.route('/:id').get(findOne).put(update).delete(remove);

/**
 * Get all the rows
 */
async function findAll(req, res) {
  res.json([]);
}

/**
 * Create a new row
 */
async function create(req, res) {
  const body = req.body;
  res.json({ body });
}

/**
 * Get a row
 */
async function findOne(req, res) {
  const { id } = req.params;
  res.json({ id });
}

/**
 * Update a row
 */
async function update(req, res) {
  const { id } = req.params;
  const body = req.body;
  res.json({ id, body });
}

/**
 * Delete a row
 */
async function remove(req, res) {
  const { id } = req.params;
  res.json({ id });
}

module.exports = router;
