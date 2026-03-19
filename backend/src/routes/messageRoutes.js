const express = require('express');
const { createMessageController } = require('../controllers/messageController');

const router = express.Router();

router.post('/', createMessageController);

module.exports = router;
