import {useState,useEffect} from "react";
import "./LiveValue.css"
import { URL } from "config.js"

export default function LiveStats()
{
    // * STATS
    const [Temperature,setTemperature] = useState(20);
    const [Humidity,setHumidity] = useState(20)
    const [Carbon,setCarbon] = useState(13)

    useEffect(() =>
    {
        setTimeout(() =>  {fetchData()},120000) // * Waits to 2 mins between each FetchData
    },)

    async function fetchData()
    {
        const response = await fetch(URL);
        if(!response.ok)
        {
            throw new Error("Could not get information...")
        }
        const data = await response.json() // * Convert from JSON
        // * Create DATA object
        setTemperature(data.temp);
        setHumidity(data.humidity);
        setCarbon(data.co2);
    }

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