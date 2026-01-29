import type { TemperatureRange, WeatherCodition } from "./weatherAdpter";

type DayPeriod = "day" | "night";

interface WeatherVisualConfig {
  background: string;
  image: string;
}
export const weatherVisualMap: Record<
  WeatherCodition,
  Record<TemperatureRange, Record<DayPeriod, WeatherVisualConfig>>
> = {
  clear: {
    freezing: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/clear_with_snow.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_scattered_snow_showers.svg",
      },
    },
    warm: {
      day: {
        background: "bg-day-primary",
        image: "/images/clear_day.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_clear.svg",
      },
    },
    hot: {
      day: {
        background: "bg-day-primary",
        image: "/images/very_hot.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_clear.svg",
      },
    },
    cold: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/clear_day.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_mostly_clear.svg",
      },
    },
    mild: {
      day: {
        background: "bg-day-primary",
        image: "/images/mostly_cloudy_day.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_mostly_clear.svg",
      },
    },
  },
  clouds: {
    mild: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/cloudy.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_mostly_clear.svg",
      },
    },
    cold: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/cloudy.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_mostly_cloudy.svg",
      },
    },
    freezing: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/cloudy_with_snow.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_scattered_snow_showers.svg",
      },
    },
    warm: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/cloudy_with_clear.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_clear.svg",
      },
    },
    hot: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/mostly_cloudy_day.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_clear.svg",
      },
    },
  },
  rain: {
    mild: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/rain_with_clear.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_scattered_showers.svg",
      },
    },
    cold: {
      day: {
        background: "bg-day-primary",
        image: "/images/rain_with_cloudy.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_scattered_showers.svg",
      },
    },
    freezing: {
      day: {
        background: "bg-day-primary",
        image: "/images/rain_with_snow.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_scattered_snow_showers.svg",
      },
    },
    warm: {
      day: {
        background: "bg-day-primary",
        image: "/images/rain_with_clear.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_scattered_showers.svg",
      },
    },
    hot: {
      day: {
        background: "bg-day-primary",
        image: "/images/rain_then_clear.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_scattered_showers.svg",
      },
    },
  },
  storm: {
    freezing: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/isolated_tstorms.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/isolated_scattered_tstorms_night.svg",
      },
    },
    cold: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/isolated_tstorms.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/isolated_scattered_tstorms_night.svg",
      },
    },
    mild: {
      day: {
        background: "bg-day-primary",
        image: "/images/isolated_tstorms.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/isolated_scattered_tstorms_night.svg",
      },
    },
    warm: {
      day: {
        background: "bg-day-primary",
        image: "/images/isolated_scattered_tstorms_day.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/isolated_scattered_tstorms_night.svg",
      },
    },
    hot: {
      day: {
        background: "bg-day-primary",
        image: "/images/isolated_scattered_tstorms_day.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/isolated_scattered_tstorms_night.svg",
      },
    },
  },
  snow: {
    freezing: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/snow_with_clear.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_scattered_snow_showers.svg",
      },
    },
    cold: {
      day: {
        background: "bg-day-primary",
        image: "/images/snow_with_cloudy.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_scattered_snow_showers.svg",
      },
    },
    mild: {
      day: {
        background: "bg-day-primary",
        image: "/images/snow_with_cloudy.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_scattered_snow_showers.svg",
      },
    },
    warm: {
      day: {
        background: "bg-day-primary",
        image: "/images/snow_then_clear.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_scattered_snow_showers.svg",
      },
    },
    hot: {
      day: {
        background: "bg-day-primary",
        image: "/images/snow_then_clear.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_scattered_snow_showers.svg",
      },
    },
  },
  fog: {
    mild: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/cloudy.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_partly_cloudy.svg",
      },
    },
    cold: {
      day: {
        background: "bg-gradient-to-b from-day-primary to-day-secondary",
        image: "/images/cloudy_with_rain.svg",
      },
      night: {
        background: "bg-gradient-to-b from-night-primary to-night-secondary",
        image: "/images/night_partly_cloudy.svg",
      },
    },
    freezing: {
      day: {
        background: "bg-day-primary",
        image: "/images/cloudy_with_snow.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_mostly_cloudy.svg",
      },
    },
    warm: {
      day: {
        background: "bg-day-primary",
        image: "/images/cloudy_with_clear.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_partly_cloudy.svg",
      },
    },
    hot: {
      day: {
        background: "bg-day-primary",
        image: "/images/cloudy_with_clear.svg",
      },
      night: {
        background: "bg-night-primary",
        image: "/images/night_partly_cloudy.svg",
      },
    },
  },
};
