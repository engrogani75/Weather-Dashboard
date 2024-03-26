import "./App.css";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/weatherBoard/WeatherBoard";

function App() {
  return (
    <>
      <div className="bg-body font-[Roboto] text-light bg-[url('../../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
        <Header></Header>
        <WeatherBoard></WeatherBoard>
      </div>
    </>
  );
}

export default App;
