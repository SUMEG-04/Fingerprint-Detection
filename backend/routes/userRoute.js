// routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const userService = require('../services/userService');

const router = express.Router();

// Auth routes
router.post('/register', async (req, res) => {
    try {
        const userData = await userService.registerUser(req.body);
        res.status(201).json(userData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await userService.loginUser(req.body);
        res.status(200).json(userData);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

// Protected routes
router.get('/profile', authMiddleware, userController.getUserProfile);

router.put('/profile', authMiddleware, userController.updateUserProfile);

router.put('/preferences', authMiddleware, userController.updateUserPreferences);

router.put('/password', authMiddleware, userController.changePassword);

router.delete('/delete', authMiddleware, userController.deleteUserAccount);

module.exports = router;
