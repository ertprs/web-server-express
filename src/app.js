const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/weather", (req, res) => {
  res.send({
    location: "Ongata Rongai",
    forecast: "20 degrees celcius",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
