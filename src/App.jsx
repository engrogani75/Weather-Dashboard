import "./App.css";
import Page from "./Page";
import { FavProvider, LocationProvider, WeatherProvider } from "./provider";

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavProvider>
            <Page></Page>
          </FavProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
