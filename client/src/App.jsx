import { useState } from "react";
import "./App.css";
import WeatherComponent from "./API/Api";
import ActualWeather from "./components/ActualWeather/ActualWeather";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <>
      <WeatherComponent
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />
      {weatherData ? (
        <div>
          <ActualWeather
            currentTemperature={weatherData.current.temperature_2m}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
