import "../blocks/main.css";
import Weather from "./Weather.js";
import ItemCard from "./ItemCard.js";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { defaultClothingItems } from "../utils/constants.js";
import { useContext } from "react";





function Main({ weatherTemp, onSelectCard, overCast}) {
  console.log(overCast)
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
  const getWeatherType = () => {
    const weatherValue = parseInt(weatherTemp)
    if ((weatherValue >= 86 && currentTemperatureUnit === 'F')||(weatherValue >= 30 && currentTemperatureUnit === 'C') ) {
      return "hot";
    } else if ((weatherValue >= 66 && weatherValue <= 85  && currentTemperatureUnit === 'F') ||(weatherValue >= 19 && weatherValue <= 29  && currentTemperatureUnit === 'C')) {
      return "warm";
    } else if ((weatherValue <= 65 && currentTemperatureUnit === 'F') || (weatherValue <= 28 && currentTemperatureUnit === 'C' )) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  const filterCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      
      <Weather day={false}  type={overCast} weatherTemp={weatherTemp} value={currentTemperatureUnit} />
      <section className="card__section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card__items">
          {filterCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Main;
