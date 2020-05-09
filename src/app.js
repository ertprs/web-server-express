const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "weather app",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Kelvin Mitaki",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    sentence: "This is a help page",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "Ongata Rongai",
    forecast: "20 degrees celcius",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
