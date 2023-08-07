import { latitude, longitude, APIkey } from "./constants";
import { handleResponse } from "./api.js";

export const getWeatherForcast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(handleResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = Math.ceil(main && main.temp);
  const weatherSky = data.weather[0].main;
  const cityName = data.name;
  console.log(weatherSky)
  const weatherData = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
    forcast: weatherSky,
    city: cityName,
  };

  return weatherData;
};
