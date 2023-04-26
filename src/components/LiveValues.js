import {useState,useEffect} from "react";
import "./LiveValue.css"

export default function LiveStats()
{
    // * STATS
    const [Temperature,setTemperature] = useState(20);
    const [Humidity,setHumidity] = useState(20)
    const [Carbon,setCarbon] = useState(13)
    const [Counter,setCounter] = useState(1);

    // TODO: FETCH TEMPERATURE FROM API

    useEffect(() =>
    {
        setTimeout(() =>  {fetchData()},120000) // * Waits to 2 mins between each FetchData
    },[Counter])

    async function fetchData()
    {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Counter}`);
        if(!response.ok)
        {
            throw new Error("Could not get information...")
        }
        const data = await response.json() // * Convert from JSON
        // * Create DATA object
        setTemperature(data.stats[0].base_stat);
        setHumidity(data.stats[1].base_stat);
        setCarbon(data.stats[2].base_stat);
        let counter = Counter + 1
        setCounter(counter);

    }

    // TODO: DISPLAY FOUND TEMPERATURE
    return (
        <div className="container">
            <div className="section temperature">
                <div className="title">
                    <b>Temperature</b>
                </div>
                <div>
                    {Temperature} °C
                </div>
            </div>
            <div className="section humidity">
                <div className="title">
                    <b>Humidity</b>
                </div>
                <div>
                    {Humidity} %
                </div>
            </div>
            <div className="section carbon">
                <div className="title">
                    <b>C0₂</b>
                </div>
                <div>
                    {Carbon} %
                </div>
            </div>
        </div>
    )
}