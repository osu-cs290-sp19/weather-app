/*
Import needed frameworks and components
*/
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForm from './UserInput/WeatherForm.js'; //react component to get weather readings

/*
This is the main app react component. All other components are called from this component.
*/
function App() {

  const getRH = (dryBulb, wetBulb, elevate) => {
    /*
    in this function we need to connect to the datastore somehow. 
    Then will call some displayRH component when we have the value.
    */
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
