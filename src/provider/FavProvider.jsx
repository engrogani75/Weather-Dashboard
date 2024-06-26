// import { useLocalStorage } from "../Hooks";
import { FavContex } from "../contex";
import { useLocalStorage } from "../Hooks";

const FavProvider = ({ children }) => {
  const [fav, setFav] = useLocalStorage("favourite", []);

  const addFav = (latitude, longitude, location) => {
    setFav([
      ...fav,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFav = (location) => {
    const restFavs = fav.filter((fav) => fav.location !== location);
    setFav(restFavs);
  };

  return (
    <FavContex.Provider value={{ addFav, removeFav, fav }}>
      {children}
    </FavContex.Provider>
  );
};

export default FavProvider;
