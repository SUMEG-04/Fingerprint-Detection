const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

// Generate JWT token
const generateToken = (userId) => {
    const secretKey = process.env.JWT_SECRET || 'yourSecretKey';
    return jwt.sign({ userId }, secretKey, { expiresIn: '24h' });
};

// Register new user
const registerUser = async (userData) => {
    const { name, email, password } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
    };
};

// Login user
const loginUser = async (credentials) => {
    const { email, password } = credentials;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
    };
};

// Change user password
const changePassword = async (userId, currentPassword, newPassword) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
        throw new Error('Current password is incorrect');
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    user.password = hashedPassword;
    await user.save();

    return true;
};

// Delete user account
const deleteUser = async (userId) => {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return true;
};

module.exports = {
    registerUser,
    loginUser,
    changePassword,
    deleteUser,
    generateToken
};
