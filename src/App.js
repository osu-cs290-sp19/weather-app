/*
Import needed frameworks and components
*/
import React, { useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WeatherForm from './UserInput/WeatherForm.js'; //react component to get weather readings

/*
This is the main app react component. All other components are called from this component.
*/
function App() {
  const [rhVal, setrhVal] = useState(11111);

  const getRH = (dryBulb, wetBulb, elevate) => {
    /*
    in this function we need to connect to the datastore somehow. 
    Then will call some displayRH component when we have the value.
    */
    // var testVal = rh.rhCalc(dryBulb, wetBulb, elevate, parsedRhData1400, parsedRhData5000);
    var rhRequest = { dryBulb, wetBulb, elevate };
    //request to send to backend
    axios.get('http://localhost:3001/', { params: rhRequest})
      .then(res => { setrhVal(res.data) })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    console.log(rhVal);
    // console.log("test");
    console.log(rhRequest);
  }

  return (
    <Router>
      <div className="container">
        <h2>Fire Weather App</h2>
        <div>
          <h3>Input Your Readings Here:</h3>
          <div className="enter-bulbs-form">
            <Route path="/" exact render={() => <WeatherForm getRH={getRH} />} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
