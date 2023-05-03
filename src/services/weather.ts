import { WeatherDetail, WeatherForecast, WeatherResponse } from "../types/weather";
import { GetAsync } from "./api";
const GeoURL: string = "data/2.5";

/**
 * Get location.
 * @returns all location objects.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
 */
export const GetGeoLocationAsync = async (location: string) => {
  return GetAsync<WeatherResponse>(`${GeoURL}/find?q=${location}&units=metric`);
};

/**
 * Get weather location.
 * @returns location objects.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
 */
export const GetLocationWeatherAsync = async (lat: number, lon: number) => {
  return GetAsync<WeatherDetail>(`${GeoURL}/weather?lat=${lat}&lon=${lon}&units=metric`);
};

/**
 * Get climate forecast.
 * @returns climate forecast.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
 */
export const GetClimateForecastAsync = async (lat: number, lon: number) => {
  return GetAsync<WeatherForecast>(`${GeoURL}/forecast?lat=${lat}&lon=${lon}&units=metric`);
};
