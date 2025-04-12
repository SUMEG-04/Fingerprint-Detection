const fingerprintService = require('../services/fingerprintService');

// Match fingerprint
exports.matchFingerprint = async (req, res) => {
    try {
        console.log(req.file);
        if (!req.file) {
            return res.status(400).json({ error: 'No fingerprint image uploaded' });
        }

        const uploadedImagePath = req.file.path;
        const matchResult = await fingerprintService.matchFingerprint(uploadedImagePath);
        console.log(matchResult);
        res.status(200).json(matchResult);
    } catch (error) {
        console.error('Error matching fingerprint:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
