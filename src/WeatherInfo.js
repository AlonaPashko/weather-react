import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props){
    return (<div className="WeatherInfo">
         <div className="city">{props.data.city}</div>
         <WeatherTemperature celsius={props.data.temperature} />
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
                <WeatherIcon code={props.data.icon}/>
                </div>
              </div>
            </div>
    );
}