import React, { useState } from "react";

export default function Weather() {
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
  return (
    <div className="Search-Show">
      <header>
        <form className="search-block d-flex">
          <input
            type="search"
            placeholder="Enter a City..."
            required
            className="search-text"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="Weather-Content">
          <div>
            <h1 className="City-name">Rome</h1>
            <p className="City-details">
              <span>{actualDate()}</span>,{" "}
              <span className="text-capitalize">Cloudy</span>
              <br />
              Humidity: <strong>70%</strong>, Wind:
              <strong> 1.6km/h</strong>
            </p>
          </div>
          <div className="City-temperature">
            <span>
              <img src="" className="temperature-icone" />
            </span>
            <span className="actual-temperature"></span>
            <span className="temperature-celsius">°C</span>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </main>
    </div>
  );
}
