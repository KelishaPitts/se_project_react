import "../blocks/weather.css";
import { weatherOptions } from "../utils/constants";


const Weather = ({type, weatherTemp}) => {
  const currentHour = new Date().getHours();
  const isDay = () => {
    if (currentHour < 17 && currentHour > 5) {
      return true;
    } else {
      return false;
    }
  };
  const imageSrc = weatherOptions.find((item) => {
    return item.day === isDay() && item.type === type;
  });
 console.log(imageSrc?.url)

  const imageSrcUrl = imageSrc?.url || null;
  
  return (
    <section className="weather" id="weather">
      <div className="weather__temp">{weatherTemp}</div>
      <img className="weather__bar" src={imageSrcUrl} alt="weather__bar" />
    </section>
  );
};
export default Weather;
