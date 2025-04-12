const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const fingerprintController = require('../controllers/fingerprintController');
const upload = require('../middleware/upload');

// Route to enroll/register a new fingerprint
// router.post('/enroll', authMiddleware, fingerprintController.enrollFingerprint);

// Route to verify a fingerprint
router.post('/verify', authMiddleware,upload.single('fingerprint'), fingerprintController.matchFingerprint);

// Route to get all fingerprints for authenticated user
// router.get('/all', authMiddleware, fingerprintController.getAllFingerprints);

// Route to delete a specific fingerprint
// router.delete('/:fingerprintId', authMiddleware, fingerprintController.deleteFingerprint);

module.exports = router;
