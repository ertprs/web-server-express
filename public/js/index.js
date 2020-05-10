const fetchWeather = async (location) => {
  try {
    const response = await fetch(
      `http://localhost:3000/weather?address=${location}`
    );
    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const search = document.querySelector("input");
document.querySelector("form").addEventListener("submit", (event) => {
  fetchWeather(search.value);
  event.preventDefault();
});
