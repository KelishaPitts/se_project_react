import { latitude, longitude, APIkey } from "./constants";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // if the server returns an error, reject the promise
  return Promise.reject(`Error: ${res.status}`);
}

export const getWeatherForcast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(handleResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = Math.ceil( main && main.temp);
  const temperatureF = `${Math.round(temperature)}°F`;
  const temperatureC = `${Math.round((temperature - 32) * 5/9)}°C`;
  const weatherSky = data.weather[0].main
  console.log(weatherSky)


  const cityName = data.name;
  return [ temperature, temperatureF,  temperatureC, cityName, weatherSky];
};
