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
  const temp = weatherTemp?.[currentTemperatureUnit] || 99;
  const getWeatherType = () => {
    if (
      (temp >= 86 && currentTemperatureUnit === "F") ||
      (temp >= 30 && currentTemperatureUnit === "C")
    ) {
      return "hot";
    } else if (
      (temp >= 66 && temp <= 85 && currentTemperatureUnit === "F") ||
      (temp >= 19 && temp <= 29 && currentTemperatureUnit === "C")
    ) {
      return "warm";
    } else if (
      (temp <= 65 && currentTemperatureUnit === "F") ||
      (temp <= 28 && currentTemperatureUnit === "C")
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
        weatherTemp={temp}
        currentTemperatureUnit={currentTemperatureUnit}
      />
      <section className="card__section" id="card-section">
        Today is {temp}°{currentTemperatureUnit} / You may want to wear:
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
