/*
Import needed frameworks and components
*/
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForm from './UserInput/WeatherForm.js'; //react component to get weather readings

/*
This is all the code from the rh_calc_test_node file.
The rh.rhCalc func has been moved into App()->getRh()->testVal to be 
called on state changes.
*/
// var rh = require('./rh_calc.js');
// var fs = require('fs');
// var rhData = fs.readFileSync('./json/rh1400.json');
// var parsedRhData1400 = JSON.parse(rhData);
// rhData = fs.readFileSync('./json/rh5000.json');
// var parsedRhData5000 = JSON.parse(rhData);
// console.log(parsedRhData1400.rh1400[40][10]);

function App() {

  const getRH = (dryBulb, wetBulb, elevate) => {
    // var testVal = rh.rhCalc(dryBulb, wetBulb, elevate, parsedRhData1400, parsedRhData5000);
    var testVal = {dryBulb, wetBulb, elevate};
    console.log(testVal);
  }

  return (
    <div className="container">
      <h2>Fire Weather App</h2>
      <div>
        <h3>Input Your Readings Here:</h3>
        <div className="enter-bulbs-form">
          <WeatherForm getRH={getRH} />
        </div>
      </div>
    </div>
  );
}

export default App;
