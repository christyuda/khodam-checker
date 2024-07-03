const express = require('express');
const router = express.Router();
const { getSupportHistory } = require('../controllers/trakteerController');

router.get('/support-history', getSupportHistory);

module.exports = router;
