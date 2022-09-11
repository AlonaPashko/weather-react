
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather
        city="New York"
        temperature={25}
        date="Friday, 18:01"
        wind={16}
        humidity={77}
        description="Cloudy"
      />
      <footer>This project was coded by{" "} 
        <a href="https://www.linkedin.com/in/alona-pashko/" target="blank" rel="noreferrer">Alona Pashko</a> 
        {" "}and is <a href="https://github.com/AlonaPashko/weather-react" target="_blanck" rel="noreferrer">open-sourced on GitHub</a> 
        {" "}and <a href="https://shimmering-kangaroo-954530.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify </a>
        </footer>
    </div>
    </div>
  );
}
