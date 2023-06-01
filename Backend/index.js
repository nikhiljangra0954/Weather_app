const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { connection } = require("./Config/db");
const cors = require("cors");
const { limiter } = require("./Middleware/rateLimiter");
const { cityModel } = require("./Model/CitydataModel");
const { userRouter } = require("./Routes/UserRoute");
const { authentication } = require("./Middleware/authMiddleware");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.status(200).send({ message: "Welcome to My Weather App" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
app.use("/user", userRouter);
// Lets get the First weather Forcast and current weather

app.get("/current", limiter, async (req, res) => {
  try {
    let city = req.query.city;
    let API_KEY = process.env.API_KEY;
    const weatherData = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`
    );
    const weather = await weatherData.json();
    res.status(201).send(weather);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});
// Now lets get the forecast
app.get("/forecast", limiter, async (req, res) => {
  try {
    let city = req.query.city;
    let API_KEY = process.env.API_KEY;
    const weatherData = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?days=7&city=${city}&key=${API_KEY} `
    );
    const weather = await weatherData.json();
    res.status(201).send(weather);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

// to save the city in mongodb
app.post("/savecity", authentication, async (req, res) => {
  try {
    let cityname = req.body.cityname.toLowerCase();
    let temp = req.body.temp;
    let userID = req.body.user;
    let existingCity = await cityModel.find({
      $and: [{ cityname: cityname }, { user: userID }],
    });
    // console.log(existingCity);
    if (existingCity.length == 0) {
      let newCity = new cityModel({ cityname, temp, user: userID });
      await newCity.save();
      return res.status(201).send({ msg: "City saved" });
    } else {
      return res.status(400).send({ msg: "City already exist" });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

// Delete the saved city
app.delete("/delete");

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("listening on " + process.env.port, "Coonected to MongoDB");
  } catch (error) {
    console.log(error);
  }
});
