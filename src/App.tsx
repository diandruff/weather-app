import React, { useEffect, useState } from "react";
import "./App.css";
import {
  GetClimateForecastAsync,
  GetGeoLocationAsync,
  GetLocationWeatherAsync,
} from "./services/weather";
import { WeatherDetail, WeatherResponse } from "./types/weather";
import { Col, Row } from "react-bootstrap";
import WeatherIcon from "./component/weather/weather-icon";
import WeatherInfo from "./component/weather/weather-info";
import WeatherTitle from "./component/weather/weather-title";
import WeatherTemperature from "./component/weather/weather-temperature";
import WeatherFeelsLike from "./component/weather/weather-feels-like";
import WeatherSearchLocation from "./component/weather/weather-search-location";
import WeatherLocations from "./component/weather/weather-locations";
import WeatherForecasts from "./component/weather/weather-forecasts";

function App() {
  
  const [geoLocations, setGeoLocations] = useState<WeatherResponse>({});
  const [selectedWeather, setSelectedWeather] = useState<WeatherDetail>({});
  const [forecasts, setForecasts] = useState<WeatherDetail[]>([]);
  
  const handleOnClickLocationAsync = async (lat: number, lon: number) => {
    let response = await GetLocationWeatherAsync(lat, lon);
    let responseForecast = await GetClimateForecastAsync(lat, lon);
    setSelectedWeather(response);
    setForecasts(responseForecast?.list ?? []);
    setGeoLocations({});
  };

  const handleSearchLocation = (result: WeatherResponse) => {
    setSelectedWeather({});
    setGeoLocations(result);
  }

  return (
    <div className={"App"}>
      <header className={"App-header"}>
        <WeatherSearchLocation onSearch={(result) => handleSearchLocation(result)}></WeatherSearchLocation>
        <WeatherLocations weather={geoLocations} onClick={handleOnClickLocationAsync}></WeatherLocations>

        {selectedWeather && selectedWeather.id && (
          <>
            <WeatherTitle weather={selectedWeather} />
            <WeatherTemperature weather={selectedWeather} />
            <WeatherFeelsLike weather={selectedWeather} />
            <WeatherInfo weather={selectedWeather} />
            <WeatherForecasts weather={forecasts} /> 
          </>
        )}
      </header>
    </div>
  );
}

export default App;
