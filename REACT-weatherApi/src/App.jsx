import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search/Search';
import WeatherList from './components/WeatherList/WeatherList';
// import WeatherCard from './components/WeatherCard/WeatherCard';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const[cityName, setCityName] = useState('');
  const[weatherList, setWeatherList] = useState([]);  // lista de predicciones por horas



  useEffect(() => { 
    if(cityName){
    const cityData = async () => {
      try {
        const cityUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
        let cityResponse = await fetch(cityUrl);
        let cityData = await cityResponse.json();

        setWeatherList(cityData.list)
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    cityData();}

  }, [cityName]);

  useEffect(() => {
  }, [weatherList]

  )

  const printList = () => 
    weatherList.map(item => <WeatherList  date={item.dt_txt} temp={item.main.temp} weather={item.weather[0].description} key={uuidv4()} />
  )
    

  return (
    <>
    <Search  cityName={setCityName}/>
    {/* {showCard && <WeatherCard cityWeather={cityWeather}  />} */}
    <section>
    <h3>{cityName} </h3>
    {printList()}
    </section>
    </>
  )
}

export default App

