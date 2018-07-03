const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const cardealers = require('./routes/cardealersinfo.routes');
const carmakes = require('./routes/carmake.routes');
const carmodels = require('./routes/carmodel.routes');
const cars = require('./routes/car.routes');

require('./config/mongoose');

// Port Number
const port = process.env.port || 5000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.json());

// Endpoints
app.use('/cardealers', cardealers);
app.use('/carmakes', carmakes);
app.use('/carmodels', carmodels);
app.use('/cars', cars);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});


app.listen(port, () => {
    console.log(`Successfully setup Test platform on port ${port}`);
});
