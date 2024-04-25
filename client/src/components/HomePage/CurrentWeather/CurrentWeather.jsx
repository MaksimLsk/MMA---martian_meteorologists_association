import { Suspense } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mars from "./Mars";
import "./CurrentWeather.css";
import WeatherLogo from "../../../BDD/WeatherLogo";

function CurrentWeather({ currentTemperature, currentWeather }) {
  const temperatureMars = currentTemperature * -2;

  // Get date of the day
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth(); // getMonth() returns a 0-based month value (0 for January, 1 for February, and so on)
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month + 1}/${year}`; // add 1 to the month value to get the actual month
  return (
    <div className="container">
      <div className="current_weather">
        {/* change weather icon according to the weather */}
        <img
          src={WeatherLogo[currentWeather].imgSrc}
          alt={WeatherLogo[currentWeather].name}
          className="weatherLogo"
        />

        <div className="currentWeather_box">
          <h2>{formattedDate}</h2>
          <p>{temperatureMars}°C</p>
        </div>
      </div>

      {/* rotating Mars */}
      <div className="mars">
        <Canvas className="marsPlanet">
          <ambientLight intensity={1.8} color="#ffffff" />
          <OrbitControls
            enableZoom={false}
            autoRotate
            enablePan={false}
            enableRotate={false}
          />
          <Suspense fallback={null}>
            <Mars position={[0, -4, 0]} scale={3} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

// PropTypes validation
CurrentWeather.propTypes = {
  currentTemperature: PropTypes.number.isRequired,
  currentWeather: PropTypes.number.isRequired,
};

export default CurrentWeather;
