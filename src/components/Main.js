import "../blocks/main.css";
import WeatherCard from "./WeatherCard.js";
import ItemCard from "./ItemCard.js";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function Main({
  weatherTemp,
  onSelectCard,
  overCast,
  clothingItems,
  onCardDelete,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const getWeatherType = () => {
    const weatherValue = parseInt(weatherTemp);
    if (
      (weatherValue >= 86 && currentTemperatureUnit === "F") ||
      (weatherValue >= 30 && currentTemperatureUnit === "C")
    ) {
      return "hot";
    } else if (
      (weatherValue >= 66 &&
        weatherValue <= 85 &&
        currentTemperatureUnit === "F") ||
      (weatherValue >= 19 &&
        weatherValue <= 29 &&
        currentTemperatureUnit === "C")
    ) {
      return "warm";
    } else if (
      (weatherValue <= 65 && currentTemperatureUnit === "F") ||
      (weatherValue <= 28 && currentTemperatureUnit === "C")
    ) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  const filterCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={false}
        type={overCast}
        weatherTemp={weatherTemp}
        value={currentTemperatureUnit}
      />
      <section className="card__section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card__items">
          {filterCards.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onSelectCard={onSelectCard}
              onCardDelete={onCardDelete}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Main;
