const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];




const weatherOptions = [
  {
    url: require("../images/cloudy-day.svg").default,
    day: true,
    type: "Clouds",
  },
  {
    url: require("../images/cloudy-night.svg").default,
    day: false,
    type: "Clouds",
  },
  { url: require("../images/fog-day.svg").default, day: true, type: "Fog" },
  { url: require("../images/fog-night.svg").default, day: false, type: "Fog" },
  { url: require("../images/rain-day.svg").default, day: true, type: "Rain" },
  {
    url: require("../images/rain-night.svg").default,
    day: false,
    type: "Rain",
  },
  { url: require("../images/snow-day.svg").default, day: true, type: "Snow" },
  {
    url: require("../images/snow-night.svg").default,
    day: false,
    type: "Snow",
  },
  { url: require("../images/storm-day.svg").default, day: true, type: "Thunderstorm" },
  {
    url: require("../images/storm-night.svg").default,
    day: false,
    type: "storm",
  },
  { url: require("../images/sunny-day.svg").default, day: true, type: "Clear" },
  {
    url: require("../images/sunny-night.svg").default,
    day: false,
    type: "Clear",
  },
];

const latitude = 33.75;
const longitude = -84.38;
const APIkey = "2cb050aff33df5169e3f6dea7abde038";
const escKey = 27;

export { defaultClothingItems, latitude, longitude, APIkey, weatherOptions,escKey };
