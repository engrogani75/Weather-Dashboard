import useWeather from "../Hooks/useWeather";
import { WeatherContex } from "../contex";

const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();

  return (
    <WeatherContex.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContex.Provider>
  );
};

export default WeatherProvider;
