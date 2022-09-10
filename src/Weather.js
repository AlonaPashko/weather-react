import React from "react";
import "./Weather.css";

export default function Weather(props) {
  let weatherData = {
    city: props.city,
    temperature: props.temperature,
    date: props.date,
    description: props.description,
    wind: props.wind,
    humidity: props.humidity,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpy_wzTJquWgYdzw87xk9_ulbbAbu4gAkgMC4R5lKAHVZznHqqEC8TVNtWTjtEE1nA748&usqp=CAU"
  };
  return (
<div className="Weather">
      <form className="mb-3" id="search-form">
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
      <div className="city">
        <h1> {weatherData.city}</h1>
      </div>
      <div className="temperature">
        <strong> {weatherData.temperature}</strong>
      </div>
      <div className="date">Last updated: {weatherData.date}</div>
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
              <li>{weatherData.description}</li>
              <li>Wind: {weatherData.wind} m/h</li>
              <li>Humidity: {weatherData.humidity} %</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="main-icon">
            <img src={weatherData.imgUrl} alt="clouds-icon" width="90px" />
          </div>
        </div>
      </div>
    </div>
  );
}
