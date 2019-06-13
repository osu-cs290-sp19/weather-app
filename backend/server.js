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

mongoose.connect('mongodb://127.0.0.1:27017/weather-data', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Connected to MongoDB successfully");
})

rhRoutes.route('/').get(function(req, res){
    //set weather data values from request
    let dry = req.query.dryBulb;
    let wet = req.query.wetBulb;
    let elevate = req.query.elevate;
    //set elevation for use as key
    if(elevate >= 1400 && elevate <= 4999){
        elevate = 1400;
    } else if (elevate >= 5000 && elevate <= 9200){
        elevate = 5000;
    }
    //calc wet bulb depression
    let depression = dry - wet;
    //this creates the key to be used in json query
    let key = elevate.toString() + "." 
                + dry.toString() + "." 
                + depression.toString();
    console.log(key);
    //this returns the data from mongoDB to clientside
    weatherRH.find({[key]:{$gt:0}}, {[key]:1, _id:0},function(err, rhVal){
        if(err){
            console.log(err);
        } else {
            res.json(rhVal);
        }
    })
    
});

app.use('/', rhRoutes);

app.listen(PORT, function() {
    console.log("server is running on PORT: " + PORT);
});