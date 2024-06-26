import { useEffect, useState } from "react";


const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temprature: "",
    maxTempreture: "",
    minTemreture: "",
    humidility: "",
    cloudPerchange: "",
    wind: "",
    time: "",
    longitude: "",
    latitute: ""
  })

  const [loading, setLoading] = useState({
    state: false,
    message: ""
  })

  const [error, setError] = useState(null)

  const fetchWeatherData = async (latitude, longitude) =>{
    try{
      setLoading({
        ...loading,
        state: true,
        message: "Feathcing Weather Data.... "
      })

      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=
      // ${longitute}&lon=${latitute}&appid=f39c5187025c1039e7e208c9fac5f1a6&units=metric`)

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
    );

      if (!response.ok) {
        const errorMsg = `Feacdig Weather Data failed: ${response.status}`
        throw new Error (errorMsg)
      }

      const data = await response.json()

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
    climate: data?.weather[0]?.main,
    temprature: data?.main?.temp,
    maxTempreture: data?.main?.temp_max,
    minTemreture: data?.main?.temp_min,
    humidility: data?.main?.humidity,
    cloudPerchange: data?.clouds?.all,
    wind: data?.wind?.speed,
    time: data?.dt,
    longitude: longitude,
    latitude:  latitude
        
      }

      setWeatherData(updateWeatherData)

    }
    catch(error){
      setError(error)

    }finally{
      setLoading({
        ...loading,
        state: false,
        message: ""
      })
    }

  };

  useEffect(() =>{

    setLoading({
      loading: true,
      message: "Finding Location........."
    });
    
    navigator.geolocation.getCurrentPosition(function (position) {
      fetchWeatherData(
          position.coords.latitude,
          position.coords.longitude
      );
  });


    // fetchWeatherData(90.4152, 23.8041)


    
  }, [])

  return {
    weatherData,
    error,
    loading
  }

};

export default useWeather;
