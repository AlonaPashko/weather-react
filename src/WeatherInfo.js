import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props){
    return (<div className="WeatherInfo">
         <div className="city">{props.data.city}</div>
         <div className="temperature">
          {Math.round(props.data.temperature)}<span className="unit">°C</span>
         </div>
         <FormattedDate date={props.data.date}/>
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
                <div className="float-end me-3">
                <WeatherIcon code={props.data.icon} size={90}/>
                </div>
                </div>
              </div>
            </div>
    );
}