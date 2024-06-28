import { useState } from "react";
import { LocationContext } from "../contex";

const LocationProvider = ({ children }) => {
  const [selectLocation, setSelectLocation] = useState({
    location: "",
    latidute: 0,
    longitude: 0,
  });

  return (
    <LocationContext.Provider value={{ selectLocation, setSelectLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
