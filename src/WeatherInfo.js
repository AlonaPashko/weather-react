import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props){
    return (<div className="WeatherInfo">
         <div className="city">{props.data.city}</div>
            <div className="temperature">{Math.round(props.data.temperature)}</div>
            <div className="date">
<FormattedDate date={props.data.date}/>
            </div>
            <span className="units">
              <a href="/" className="unit-link">
                °C{" "}
              </a>{" "}
              |
              <a href="/" className="unit-link">
                {" "}
                °F
              </a>{" "}
            </span>
            <div className="row">
              <div className="col">
                <div className="left-panel">
                  <ul>
                    <li className="text-capitalize">{props.data.description}</li>
                    <li>Wind: {props.data.wind} m/h</li>
                    <li>Humidity: {props.data.humidity} %</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <WeatherIcon code={props.data.icon}/>
                </div>
              </div>
            </div>
    );
}