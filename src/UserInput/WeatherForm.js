import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/*
This whole function is a react component named WeatherForm.
*/
function WeatherForm({getRH}) {
    const [dryBulb, setDry] = useState(""); //sets the initial state for dry bulb
    const [wetBulb, setWet] = useState(""); //sets the initial state for wet bulb
    const [elevate, setElevate] = useState(""); //sets the initial elevation 

    const handleSubmit = e => {
        e.preventDefault();
        //check if user has entered a value
        //if not return to form and exit this function
        if (!dryBulb || !wetBulb || !elevate) {
            alert("Please enter a value for dry bulb, wet bulb, and elevation.");
            return;
        };
        //send new item values to addItem func in Item.js
        getRH(dryBulb, wetBulb, elevate);
    };

    /*
    When input field is clicked, set state to empty.
    */
    const clearDry = e => {
        setDry("");
    };
    const clearWet = e => {
        setWet("");
    };
    const clearElevate = e => {
        setElevate("");
    };

    /*
    This is the returned XML (not HTML but similar language)
    */
    return (
            <form onSubmit={handleSubmit} className="form-inline">
			<input
				type="number"
				step="1"
                className="input"
                onFocus={e => clearDry(e.target.value)}
				value={dryBulb}
				onChange={e => setDry(e.target.value)}
				placeholder="Dry Bulb..."
			/>
            <input
				type="number"
				step="1"
                className="input"
                onFocus={e => clearWet(e.target.value)}
				value={wetBulb}
				onChange={e => setWet(e.target.value)}
				placeholder="Wet Bulb..."
			/>
            <input
				type="number"
				step="1"
                className="input"
                onFocus={e => clearElevate(e.target.value)}
				value={elevate}
				onChange={e => setElevate(e.target.value)}
				placeholder="Elevation..."
			/>
			<input type="submit" value="Submit" />
		</form>
    );
}

export default WeatherForm; //export component to be used in other files
