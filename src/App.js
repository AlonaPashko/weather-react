
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
      <p><a href="https://github.com/AlonaPashko/weather-react" target="_blanck">Open source code</a> by Alona Pashko</p>
    </div>
  );
}
