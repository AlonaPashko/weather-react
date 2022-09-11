import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false});
  
  function handleResponse(response){
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    city: response.data.name,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    date: "Wednesday 07:00"
  });
  }
  if(weatherData.ready){
    return (
      <div className="Weather">
            <form className="mb-3">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Enter your city"
                    autoFocus="on"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary shadow-sm w-100"
                  />
                </div>
                <div className="col-3">
                  <button type="button" className="btn btn-primary shadow-sm w-100">
                    Current
                  </button>
                </div>
              </div>
            </form>
            <div className="city">{weatherData.city}</div>
            <div className="temperature">{Math.round(weatherData.temperature)}</div>
            <div className="date">{weatherData.date}</div>
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
                    <li className="text-capitalize">{weatherData.description}</li>
                    <li>Wind: {weatherData.wind} m/h</li>
                    <li>Humidity: {weatherData.humidity} %</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="weather-icon">
                  Weather-img
                  {/* make a component with animation, after a standart icon */}
                </div>
              </div>
            </div>
          </div>
        );
  }
else{
  const apiKey = "1345b5f7483d2c9fa803c522e34eb5b0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..";
}
}
