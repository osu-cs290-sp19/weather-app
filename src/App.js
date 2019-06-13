/*
Import needed frameworks and components
*/
import React, { useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"; //routing
import WeatherForm from './UserInput/WeatherForm.js'; //react component to get weather readings

/*
This is the main app react component. All other components are called from this component.
*/
function App() {
  const [rhVal, setrhVal] = useState();

  const getRH = (dryBulb, wetBulb, elevate) => {
    var rhRequest = { dryBulb, wetBulb, elevate };
    //request to send to backend
    axios.get('http://localhost:3001/', { params: rhRequest })
      .then(res => {
        rhValue(res.data, dryBulb, wetBulb, elevate);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    console.log(rhRequest);
  }

  //get rh value from backend response
  const rhValue = (resObject, dryBulb, wetBulb, elevate) => {
    let depression = dryBulb - wetBulb;
    //set proper elevation
    if (elevate >= 1400 && elevate <= 4999) {
      elevate = 1400;
    } else if (elevate >= 5000 && elevate <= 9200) {
      elevate = 5000;
    }
    let obj0 = resObject[0];
    try {
      console.log(obj0[elevate][dryBulb][depression]);
      setrhVal(obj0[elevate][dryBulb][depression]);
    } catch (e) {
      alert("There is no RH value associated with your weather readings.. Try again.");
    }
  }

  return (
    <Router>
      <div className="page-width">
        <div className="container">
          <h2 className="app-header">Fire Weather App</h2>
            <div className="input-wrapper">
              <div className="enter-bulbs-form">
                <Route path="/" exact render={() => <WeatherForm getRH={getRH} />} />
              </div>
            </div>
            <div className="rh-wrapper">
              <h3>RH: {rhVal}</h3>
            </div>
          </div>
        </div>
    </Router>
  );
}

export default App;
