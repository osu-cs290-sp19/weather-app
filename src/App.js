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
    var rhRequest = { dryBulb, wetBulb, elevate };
    //request to send to backend
    axios.get('http://localhost:3001/', { params: rhRequest})
      .then(res => { 
        rhValue(res.data, dryBulb, wetBulb, elevate); 
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    console.log(rhRequest);
  }

  const rhValue = (resObject, dryBulb, wetBulb, elevate) => {
    //write this function to get rh val from resObject
    console.log(resObject);
    // console.log("test");
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
