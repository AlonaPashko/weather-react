import React from "react";
import axios from "axios";

export default function Weather(props){
    function handleResponse(response){
        alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
         }

         let apiKey = "1345b5f7483d2c9fa803c522e34eb5b0";
         let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
         axios.get(apiUrl).then(handleResponse);
    return(<div>
        Hello from REACT weather!
    </div>);
}