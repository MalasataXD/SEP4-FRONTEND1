import { useState } from "react";
import "./EditValues.css"

export function EditValues() {

    const [ temperature, setTemperature ] = useState("");
    const [ humidity, setHumidity ] = useState("");

    return (
        <div className="Edit-values-card">
            <div className="Title"><b>Edit Values</b></div>
            <br/>
            <div className="Input-container">
                <input className="Input" placeholder="Temperature" type="text" id="Temperature" name="Temperature" onChange={(event) => setTemperature(event.target.value)}/>
                <input className="Input" placeholder="Humidity" type="text" id="Humidity" name="Humidity" onChange={(event) => setHumidity(event.target.value)} />
                <button className="Save-button" onClick={() => handleClick()}> SAVE </button>
            </div>
        </div>
    )    


    function handleClick(){
        // API thing pog
        console.log(temperature);
        console.log(humidity);
    }

    function validation(){
        // no or yes?
    }
}
