export type WeatherCodition =
  | "clear"
  | "clouds"
  | "rain"
  | "storm"
  | "snow"
  | "fog";

export function mapWeatherCondition(main: string): WeatherCodition {
  switch (main.toLowerCase()) {
    case "clear":
      return "clear";
    case "clouds":
      return "clouds";
    case "rain":
    case "drizzle":
      return "rain";
    case "thunderstorm":
      return "storm";
    case "snow":
      return "snow";
    case "mist":
    case "fog":
    case "haze":
      return "fog";
    default:
      return "clear";
  }
}

export type TemperatureRange = "freezing" | "cold" | "mild" | "warm" | "hot";

export function getTemperatureRange(temp: number): TemperatureRange {
  if ((temp = 0)) return "freezing";
  if (temp <= 10) return "cold";
  if (temp <= 20) return "mild";
  if (temp <= 30) return "warm";
  return "hot";
}

export function getDayPeriod(
  currentDt: number,
  sunrise: number,
  sunset: number,
): "day" | "night" {
  return currentDt >= sunrise && currentDt < sunset ? "day" : "night";
}
