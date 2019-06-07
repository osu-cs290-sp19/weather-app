//var rh1400;   // rh values for 1400'-4999' elevation 
//var rh5000;   // rh values for 5000'-9200'

/**
 * rhCalc calculates an array based on provided drybulb, wet bulb,
 * elevation, and rh tables
 * @param {INT}dryBulb {INT} wetBULB
 * @return {!Array<TYPE>}
 * @template TYPE
 */
function rhCalc (dryBulb, wetBulb, elevation, parsedRh1400, parsedRh5000) {
  var relativeHumidity;
  var wetBulbDepresson = dryBulb - wetBulb;
  
  if (elevation >= 1400 && elevation <= 4999) {
    relativeHumidity = parsedRh1400.rh1400[dryBulb][wetBulbDepresson];
    
    if (relativeHumidity != null) {
      return relativeHumidity;
    }
    else {
      console.error('no rh values associated with wet and dry bulb values');
    }
  }
  
  else if (elevation >= 5000 && elevation <= 9200) {
    relativeHumidity = parsedRh5000.rh5000[dryBulb][wetBulbDepresson];
    
    if (relativeHumidity != null) {
      return relativeHumidity;
    }
    else {
      console.error('no rh values associated with wet and dry bulb values');
    }
  }
  
  else {
    console.error('invalid values');
  }
}

module.exports = {
  rhCalc: rhCalc
};