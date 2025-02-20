import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function weatherDetailsCity(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }
  function searchWithApi() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a95c2c6739994ba4903e007ee817e7d1&units=metric`;
    axios.get(apiUrl).then(weatherDetailsCity);
  }
  function citySearch(event) {
    setCity(event.target.value);
  }
  function citySubmit(event) {
    event.preventDefault();
    searchWithApi();
  }

  function actualDate() {
    const date = new Date();
    const options = { weekday: "long" };
    const day = date.toLocaleDateString("en-US", options);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    if (hour < 10) {
      return `${day} 0${hour}:${minutes}`;
    }
    if (minutes < 10) {
      return `${day} ${hour}:0${minutes}`;
    } else {
      return `${day} ${hour}:${minutes}`;
    }
  }
  if (weatherDetailsCity.loaded) {
    return (
      <div className="Search-Show">
        <header>
          <form
            className="search-block d-flex"
            autoFocus="on"
            onSubmit={citySubmit}
          >
            <input
              type="search"
              placeholder="Enter a City..."
              required
              className="search-text"
              onChange={citySearch}
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </header>
        <main>
          <div className="Weather-Content">
            <div>
              <h1 className="City-name">{weather.city}</h1>
              <p className="City-details">
                <span>{actualDate()}</span>,{" "}
                <span className="text-capitalize">{weather.description}</span>
                <br />
                Humidity: <strong>{weather.humidity}%</strong>, Wind:
                <strong> {weather.wind}km/h</strong>
              </p>
            </div>
            <div className="City-temperature">
              <span>
                <img src="" className="temperature-icone" />
              </span>
              <span className="actual-temperature">{weather.temperature}</span>
              <span className="temperature-celsius">°C</span>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </main>
      </div>
    );
  } else {
    searchWithApi();
    return (
      <div className="Search-Show">
        <header>
          <form
            className="search-block d-flex"
            autoFocus="on"
            onSubmit={citySubmit}
          >
            <input
              type="search"
              placeholder="Enter a City..."
              required
              className="search-text"
              onChange={citySearch}
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </header>
        <p>Loading...</p>
      </div>
    );
  }
}
