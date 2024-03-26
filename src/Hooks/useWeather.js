import { useState } from "react";


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

  const fetchWeatherDasta = async (logitute, lattitute) =>{
    try{
      setLoading({
        ...loading,
        state: true,
        message: "Feathcing Weather Data "
      })

      const response = fetch(``)

      if (!response) {
        const errorMsg = `Feacdig Weather Data failed: ${response.status}`
        throw new Error (errorMsg)
      }

      const data = (await response).json()

      const updateWeatherData = {
        ...weatherData,
        
      }



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

  }

};

export default useWeather;
