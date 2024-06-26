import { useContext, useEffect, useState } from "react";
import heart from "../../assets/heart.svg";
import Redheart from "../../assets/heart-red.svg";
import { FavContex, WeatherContex } from "../../contex";

const AddToFav = () => {
  const { addFav, removeFav, fav } = useContext(FavContex);
  const { weatherData } = useContext(WeatherContex);
  const { latitude, longitude, location } = weatherData;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const found = fav.find((fav) => fav.location === location);
    setIsFav(found);
  }, []);

  const handleFav = () => {
    const found = fav.find((fav) => fav.location === location);
    if (!found) {
      addFav(latitude, longitude, location);
    } else {
      removeFav(location);
    }
    setIsFav(!isFav);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFav}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFav ? Redheart : heart} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFav;
