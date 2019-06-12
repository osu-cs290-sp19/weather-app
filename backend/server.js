const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const rhRoutes = express.Router();
const PORT = 3001;

let weatherRH = require('./weather-rh-data.model')

app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://127.0.0.1:27017/weather-info', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Connected to MongoDB successfully");
})

rhRoutes.route('/').get(function(req, res){
    let dry = req.query.dryBulb;
    console.log(dry);
    let wet = req.query.wetBulb;
    console.log(wet);
    let elevate = req.query.elevate;
    console.log(elevate);
    
});

app.use('/', rhRoutes);

app.listen(PORT, function() {
    console.log("server is running on PORT: " + PORT);
});