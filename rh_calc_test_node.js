/*
Commented out this file for now. Should be able to connect to the data store from App.js

var rh = require('./src/rh_calc.js');
var fs = require('fs');

var rhData = fs.readFileSync('rh1400.json');

var parsedRhData1400 = JSON.parse(rhData);

rhData = fs.readFileSync('rh5000.json');

var parsedRhData5000 = JSON.parse(rhData);

var testVal = rh.rhCalc(61, 40, 1500, parsedRhData1400, parsedRhData5000);

//console.log(parsedRhData5000.rh5000[101]);
console.log(testVal);
*/