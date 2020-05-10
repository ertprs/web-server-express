const axios = require("axios");

const getWeather = (address, callback) => {
  const API_KEY = "bf8ebd6823d41bb5db7c76d9f49ee8e1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    address
  )}&appid=${API_KEY}&units=metric`;

  axios.default
    .get(url)
    .then((res) => callback(null, res.data))
    .catch((err) => callback(err));
};

module.exports = getWeather;
