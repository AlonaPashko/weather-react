
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
    </div>
  );
}
