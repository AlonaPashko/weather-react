import React, { useState} from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props){
  const [unit, setUnit] = useState("celsius");
  
  function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit(){
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius"){
    return(<div className="WeatherTemperature">
    <span className="temperature">{Math.round(props.celsius)}</span>
    <span className="units">
         <span className="unit-link">
           °C{" "}
         </span>{" "}
         |
         <a href="/" className="unit-link" onClick={showFahrenheit}>
           {" "}
           °F
         </a>{" "}
       </span>
</div>);
  }
  else{
    return(<div className="WeatherTemperature">
    <span className="temperature">{Math.round(fahrenheit())}</span>
    <span className="units">
         <a href="/" className="unit-link" onClick={showCelsius}>
           °C{" "}
         </a>{" "}
         |
         <span className="unit-link">
           {" "}
           °F
         </span>{" "}
       </span>
</div>);
  }
}