import React from "react";

const WeatherCard = ({cityWeather}) => {

  return (
  <section>
      <h2>Current Weather in {cityWeather.cityName} </h2>
      <p> {cityWeather.date}</p>
      <p>{cityWeather.time}</p>
      <p>Temperature: {cityWeather.temp} Cº</p>
      <p>Sky weather: {cityWeather.weather}</p>


  </section>
  );
};

export default WeatherCard;
