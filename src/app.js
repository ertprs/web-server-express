const express = require("express");
const path = require("path");
const hbs = require("hbs");
const getWeather = require("./getWeather");

const app = express();

//PATHS FOR EXPRESS CONFIG and STATIC DIRECTORY TO SERVE
app.use(express.static(path.join(__dirname, "../public")));

// SETUP HANDLEBARS ENGINE AND VIEWS ENGINE
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "Kelvin Mitaki",
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
    title: "Help Page",
    name: "Kelvin Mitaki",
    sentence: "This is a help page",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  getWeather(req.query.address, (error, data) => {
    if (data) {
      return res.send(data);
    }
    res.send({
      error: "Cannot get weather of the specified address",
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    message: "help article not found",
    name: "Kelvin",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    message: "page not found",
    name: "Kelvin",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
