const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoute');
const fingerprintRoutes = require('./routes/fingerprintRoutes');

require('dotenv').config();
require('./config/db')

const port = process.env.PORT || 5000; 

const corsOptions = {
    origin: 'http://localhost:3000', //included origin as true
    credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/fingerprint', fingerprintRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 