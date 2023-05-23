const latitude = 44.34;
const longitude = 10.99;
const APIkey = "2cb050aff33df5169e3f6dea7abde038";

export const getWeatherForcast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  console.log(data);
  const main = data.main;
  const temperature = main && main.temp;
  const cityName = data.name;
  return [Math.ceil(temperature), cityName];
};
