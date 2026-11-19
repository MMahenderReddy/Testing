const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

// Middleware to get userId (for demo, from query or header)
function getUserId(req) {
  // In production, use req.user.id from auth middleware
  return req.query.userId || req.header('x-user-id');
}

// GET /api/notifications?read=true|false
router.get('/', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) return res.status(400).json({ error: 'Missing userId' });
    const filter = { userId };
    if (req.query.read === 'true') filter.read = true;
    if (req.query.read === 'false') filter.read = false;
    const notifications = await Notification.find(filter)
      .sort({ createdAt: -1 })
      .limit(30);
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// PATCH /api/notifications/:id/read
router.patch('/:id/read', async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) return res.status(400).json({ error: 'Missing userId' });
    const { id } = req.params;
    const notification = await Notification.findOneAndUpdate(
      { _id: id, userId },
      { $set: { read: true } },
      { new: true }
    );
    if (!notification) return res.status(404).json({ error: 'Notification not found' });
    res.json(notification);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update notification' });
  }
});

module.exports = router;
