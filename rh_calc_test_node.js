var rh = require('./rh_calc.js');
var fs = require('fs');

var rhData = fs.readFileSync('rh1400.json');

var parsedRhData = JSON.parse(rhData);

var testVal = rh.rhCalc(34, 25, 1500, parsedRhData, parsedRhData);

console.log(parsedRhData.rh1400[34][19]);
console.log(testVal);