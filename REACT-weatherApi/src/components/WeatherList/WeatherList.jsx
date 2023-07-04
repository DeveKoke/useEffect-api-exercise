import React from "react";
import './WeatherList.css'

const WeatherList = (  {name, date, temp, weather} ) => {

  return (
  <article>
    <h2> {date} </h2>
    <p>Temperature: {temp}Cº </p>
    <p>Sky weather: {weather} </p>

  </article>
  );
};

export default WeatherList;
