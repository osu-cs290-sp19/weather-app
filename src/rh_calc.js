/**
 * @description rhCalc calculates an array based on provided drybulb, wet bulb,
 * elevation, and rh tables
 * @param {number} dryBulb the dry bulb value in farenheit
 * @param {number} wetBulb the wet bulb value in farenheit
 * @param {elevation} elevation the current elevation in feet
 * @param {object} parsedRh1400 the parsed json data for 1400'-5000' elevation
 * @param {object} parsedRh5000 the parsed json data for 5000'-9200' elevation
 * 
 * @return {number} returns the relative humidity if it can be found, if
 * there is no relative humidity associated with the dry, wet bulb, and
 * elevation values, then -1 is returned and an error is logged to 
 * the console.
 */
function rhCalc (dryBulb, wetBulb, elevation, parsedRh1400, parsedRh5000) {
  var relativeHumidity, goodDryBulbValue;
  // calculate wet bulb depression to use w/ json data
  var wetBulbDepresson = dryBulb - wetBulb;
  
  //check that the wet bulb depression values are valid
  if (wetBulbDepresson < 1 || wetBulbDepresson > 31) {
    console.error("wetbulb depression exceeds accepted ranges");
    return -1;
  }

  if (elevation >= 1400 && elevation <= 4999) {
    //check if rh value exists on table
    if (parsedRh1400.rh1400[dryBulb] === undefined) {
      console.error("invalid drybulb value");
      return -1;
    }

    //find rh value in correct array
    relativeHumidity = parsedRh1400.rh1400[dryBulb][wetBulbDepresson];
    
    //check if values can be found in the table are valid
    if (relativeHumidity === null && typeof relativeHumidity === "object") {
      console.error("no rh values associated with wet and dry bulb values");
      return -1;
    }
    else {
      return relativeHumidity;
    }
  }
  
  //same process as above for 1400 elevation
  else if (elevation >= 5000 && elevation <= 9200) {
    if (parsedRh1400.rh1400[dryBulb] === undefined) {
      console.error("invalid drybulb value");
      return -1;
    }

    relativeHumidity = parsedRh5000.rh5000[dryBulb][wetBulbDepresson];
    
    if (relativeHumidity === null && typeof relativeHumidity === "object") {
      console.error('no rh values associated with wet and dry bulb values');
      return -1;
    }
    else {
      return relativeHumidity;
    }
  }
  
  else {
    // "catch-all" for bad cases and edge cases
    console.error("invalid values");
    return -1;
  }
}

module.exports = {
  rhCalc: rhCalc
};