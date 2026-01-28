import { WeatherSchema } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city: string) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const respose = await fetch(url);
  const json = await respose.json();

  return WeatherSchema.parse(json);
}
