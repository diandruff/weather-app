export interface WeatherResponse {
  message?: string;
  cod?: string;
  count?: number;
  list?: WeatherDetail[];
}

export interface WeatherDetail {
  id?: number;
  name?: string;
  coord?: Coord;
  main?: Main;
  dt?: number;
  dt_txt?: string;
  wind?: Wind;
  sys?: Sys;
  rain?: Rain;
  snow?: any;
  visibility?: number;
  clouds?: Clouds;
  weather?: Weather[];
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Sys {
  country: string;
  sunrise?: number;
  sunset?: number;
}

export interface Rain {
  "1h": number;
}

export interface Clouds {
  all: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherForecast {
  list: WeatherDetail
}