import { useContext } from "react";
import { FavContex, LocationContext } from "../../contex";

const FavModal = () => {
  const { fav } = useContext(FavContex);
  const { setSelectLocation } = useContext(LocationContext);
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {fav.length > 0
          ? fav.map((fav) => (
              <li key={fav.location} className="hover:bg-gray-200">
                <a onClick={() => setSelectLocation({ ...fav })}>
                  {fav.location}
                </a>
              </li>
            ))
          : "there are noting add yet"}
      </ul>
    </div>
  );
};

export default FavModal;
