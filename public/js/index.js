const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

const fetchWeather = async (location) => {
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  const response = await fetch(
    `http://localhost:3000/weather?address=${location}`
  );
  const res = await response.json();

  if (res.weather) {
    messageOne.textContent = res.weather;
    messageTwo.textContent = `Description: ${res.description}`;
  } else {
    messageOne.textContent = "";
    messageTwo.textContent = res.error;
  }
};

const search = document.querySelector("input");
document.querySelector("form").addEventListener("submit", (event) => {
  if (search.value) {
    fetchWeather(search.value);
    search.value = "";
  } else {
    messageTwo.textContent = "You must enter a value";
  }
  event.preventDefault();
});
