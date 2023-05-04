import React from "react";
import {useState,useEffect} from "react";
import "./LiveValue.css"

export default function LiveStats()
{
    // * STATS
    const [Temperature,setTemperature] = useState("20");
    const [Humidity,setHumidity] = useState("20")
    const [Carbon,setCarbon] = useState("13")
    const [Counter,setCounter] = useState(0);

    useEffect(() =>
    {
        setTimeout(() =>  {fetchData()},120000) // * Waits to 2 mins between each FetchData
    },[Counter])

    async function fetchData()
    {
        const response = await fetch("http://10.154.220.53:8080/data",{mode:'cors'});
        if(!response.ok)
        {
            throw new Error("Could not get information...")
        }
        const data = await response.json() // * Convert from JSON
        // * Create DATA object
        console.log(data)
        setTemperature(data[Counter]?.temp);
        setHumidity(data[Counter]?.humidity);
        setCarbon(data[Counter]?.co2);
        let counter = Counter + 1
        setCounter(counter);

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