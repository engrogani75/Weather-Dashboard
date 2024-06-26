import { useContext } from "react";
import { WeatherContex } from "../../contex";

import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import MaxIcon from "../../assets/icons/temp-max.svg";
import MinIcon from "../../assets/icons/temp-min.svg";
import HumidityIcon from "../../assets/icons/humidity.svg";
import WindIcon from "../../assets/icons/wind.svg";
import SunnyIcon from "../../assets/sun.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";
import pINIcon from "../../assets/pin.svg";

const WeatherDetails = () => {
  const { weatherData } = useContext(WeatherContex);
  const {
    maxTempreture,
    minTemreture,
    humidility,
    cloudPerchange,
    wind,
    climate,
  } = weatherData;

  function getWeatherIcon(Climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;

      default:
        return SunnyIcon;
    }
  }

  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        {" "}
        The Climate is {climate}
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTempreture)}°</p>
            <img src={MaxIcon} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemreture)}°</p>
            <img src={MinIcon} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humidility}%</p>
            <img src={HumidityIcon} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPerchange}%</p>
            <img src={getWeatherIcon(climate)} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={WindIcon} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WeatherDetails;
