import { z } from "zod";

export const WeatherSchema = z.object({
  name: z.string(),
  dt: z.number(),
  timezone: z.number(),
  sys: z.object({
    country: z.string(),
    sunrise: z.number(),
    sunset: z.number(),
  }),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    humidity: z.number(),
  }),
  wind: z.object({
    speed: z.number(),
  }),
  weather: z
    .array(
      z.object({
        main: z.string(),
      }),
    )
    .min(1),
});
