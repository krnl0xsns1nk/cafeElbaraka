const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const restaurant = require("./data/restaurant.json");
const restaurantFR = require("./data/restaurantFR.json");
const restaurantEN = require("./data/restaurantEN.json");

app.get("/", (req, res) => {
  res.render("index", {
    restaurant,
    lang: "ar",
  });
});

app.get("/fr", (req, res) => {
  res.render("index", {
    restaurant: restaurantFR,
    lang: "fr",
  });
});

app.get("/en", (req, res) => {
  res.render("index", {
    restaurant: restaurantEN,
    lang: "en",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
