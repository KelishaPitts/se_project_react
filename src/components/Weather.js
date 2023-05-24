import "../blocks/weather.css";
import { weatherOptions } from "../utils/constants";

const Weather = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = imageSrc.url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__temp">{weatherTemp}°F</div>
      <img className="weather__bar" src={imageSrcUrl} alt="weather__bar" />
    </section>
  );
};
export default Weather;
