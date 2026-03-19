const express = require('express');
const { uploadResumeController, getActiveResumeController } = require('../controllers/resumeController');
const uploadResume = require('../middlewares/uploadMiddleware');

const router = express.Router();

router.get('/active', getActiveResumeController);
router.post('/upload', uploadResume.single('resume'), uploadResumeController);

module.exports = router;
