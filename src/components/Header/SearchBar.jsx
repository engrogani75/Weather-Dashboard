import { useContext, useState } from "react";
import searchImg from "../../assets/search.svg";
import { LocationContext } from "../../contex";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../Hooks";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term) => {
    const fetchData = getLocationByName(term);
    console.log(fetchData);
    setSelectLocation({ ...fetchData });
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    doSearch(value);
  }

  return (
    <div>
      <form action="#">
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            onChange={handleChange}
            required
          />
          <button type="submit">
            <img src={searchImg} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
