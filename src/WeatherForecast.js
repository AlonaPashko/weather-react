import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import "./WeatherForecastDay.js";
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    
    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if(loaded){
        return(<div className="WeatherForecast">
        <div className="row">
            <div className="col">
               <WeatherForecastDay data={forecast[0]}/>
            </div>
        </div>
    </div>)
    }
    else {
        let apiKey = "b47fdf6445cd8b64ab889be77dbe56d4";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}