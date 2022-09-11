
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather
        city="Wejherowo"
        temperature={25}
        date="Friday, 18:01"
        wind={16}
        humidity={77}
        description="Cloudy"
      />
      <footer>This project was coded by{" "} 
        <a href="https://www.linkedin.com/in/alona-pashko/" target="blank">Alona Pashko</a> 
        {" "}and is <a href="https://github.com/AlonaPashko/weather-react" target="_blanck">open-sourced on GitHub</a> 
        {" "}and <a href="https://shimmering-kangaroo-954530.netlify.app/" target="_blank">hosted on Netlify </a></footer>
    </div>
  );
}
