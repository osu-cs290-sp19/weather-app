const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let weatherRH = new Schema({

});

module.exports = mongoose.model('weatherRH', weatherRH);