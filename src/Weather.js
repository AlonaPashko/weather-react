import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response){
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    date: new Date(response.data.dt * 1000),
    city: response.data.name,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    icon: response.data.weather[0].icon,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed
  });
  }

function search(){
    const apiKey = "1345b5f7483d2c9fa803c522e34eb5b0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}
  
function handleSubmit(event){
event.preventDefault();
search();
}

function handleCityChange(event){
setCity(event.target.value);
}
  if(weatherData.ready){
    return (
      <div className="Weather">
            <form className="mb-3" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter your city"
                    autoFocus="on"
                    className="form-control"
                    autoComplete="off"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="form-control btn btn-primary shadow-sm w-100"
                  />
                </div>
              </div>
              <WeatherInfo data={weatherData}/>
              <WeatherForecast coordinates={weatherData.coordinates}/>
            </form>
           </div>
        );
  }
else{
  search();
  return "Loading..";
}
}
