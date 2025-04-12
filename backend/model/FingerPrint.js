const mongoose=require('mongoose');

const FingerprintSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fingerprintData: { type: Buffer, required: true }, // Encrypted fingerprint template
    createdAt: { type: Date, default: Date.now }
});

module.exports=mongoose.model('FingerPrint',FingerprintSchema)