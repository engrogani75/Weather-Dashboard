import { useContext } from "react";
import AddToFav from "./AddToFav";
import WeatherDetails from "./WeatherDetails";
import WeatherHeadLine from "./WeatherHeadLine";
import { WeatherContex } from "../../contex";

const WeatherBoard = () => {
  const { weatherData, loading } = useContext(WeatherContex);
  console.log(weatherData);

  return (
    <main>
      <section className="">
        <div className="container">
          <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-6">
              {loading.state ? (
                loading.message
              ) : (
                <>
                  <AddToFav></AddToFav>
                  <WeatherHeadLine></WeatherHeadLine>
                  <WeatherDetails></WeatherDetails>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WeatherBoard;
