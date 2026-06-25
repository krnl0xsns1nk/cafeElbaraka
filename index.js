const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Load JSON data
const restaurantAR = require("./data/restaurant.json");

// If you later add FR/EN, you can duplicate like this:
const restaurantFR = require("./data/restaurantFR.json");
const restaurantEN = require("./data/restaurantEN.json");

app.get("/", (req, res) => {
  res.render("index", {
    restaurant: restaurantAR,
  });
});


//Future multilingual structure (optional):

app.get("/fr", (req, res) => {
  res.render("index", { restaurant: restaurantFR });
});

app.get("/en", (req, res) => {
  res.render("index", { restaurant: restaurantEN });
});


// 404 fallback
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
