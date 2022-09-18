
import "./App.css";
import Weather from "./Weather.js";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Wejherowo"/>
      <footer>This project was coded by{" "} 
        <a href="https://www.linkedin.com/in/alona-pashko/" target="blank" rel="noopener noreferrer">Alona Pashko</a> 
        {" "}and is <a href="https://github.com/AlonaPashko/weather-react" rel="noopener noreferrer" target="_blank">open-sourced on GitHub</a> 
        {" "}and <a href="https://shimmering-kangaroo-954530.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify </a>
        </footer>
    </div>
    </div>
  );
}
