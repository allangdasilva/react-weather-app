import { useQuery } from "@tanstack/react-query";
import { MainCard } from "../patterns/MainCard";
import SearchBar from "../ui/SearchBar";
import TextBody from "../ui/TextBody";
import { getWeather } from "../../api/getWeather";
import React from "react";
import WeatherSkeleton from "../skeletons/WeatherSkeleton";
import WeatherError from "../helper/WeatherError";
import GitHub from "../icons/GitHub";
import {
  getDayPeriod,
  getTemperatureRange,
  mapWeatherCondition,
} from "../../api/weatherAdpter";
import { weatherVisualMap } from "../../api/weatherVisual";

const WeatherComponent = () => {
  const [searchLocation, setSearchLocation] = React.useState("");
  const [lastSearch, setLastSearch] = React.useState("");

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["weather", searchLocation],
    queryFn: () => getWeather(searchLocation),
    enabled: !!searchLocation,
  });

  const handleSearch = () => {
    if (!searchLocation || searchLocation === lastSearch || isLoading) {
      return;
    }

    setLastSearch(searchLocation);
    refetch();
  };

  const backgroundClass = React.useMemo(() => {
    if (!data) return "bg-day-primary";

    const condition = mapWeatherCondition(data.weather[0].main);
    const tempRange = getTemperatureRange(data.main.temp);
    const period = getDayPeriod(data.dt, data.sys.sunrise, data.sys.sunset);

    return (
      weatherVisualMap[condition][tempRange][period].background ??
      "bg-day-primary"
    );
  }, [data]);

  return (
    <div className={`min-h-dvh p-6 flex transition-colors ${backgroundClass}`}>
      <div className="w-full max-w-322 m-auto flex flex-col gap-8">
        <div className="w-fit">
          <a
            aria-label="Ver código no GitHub"
            title="Acessar código-fonte no GitHub"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </div>

        <SearchBar
          type="text"
          placeholder="Search by location"
          label="search-by-location"
          value={searchLocation}
          onChange={({ target }) => {
            setSearchLocation(target.value);
          }}
          handleClick={handleSearch}
          isDisabled={isLoading}
        />

        {isLoading && <WeatherSkeleton />}

        {isError && <WeatherError />}

        {data && (
          <>
            <TextBody>
              {data.name}, {data.sys.country}
            </TextBody>
            <div className="flex justify-between gap-6 flex-wrap">
              <MainCard.Root className="w-full flex flex-wrap min-[440px]:flex-row gap-4 md:max-w-fit">
                <MainCard.Image
                  src={data.weather[0].main}
                  temp={data.main.temp}
                  sunrise={data.sys.sunrise}
                  sunset={data.sys.sunset}
                  currentDt={data.dt}
                />
                <MainCard.Celsius temp={data.main.temp} />
                <MainCard.Infos
                  feels_like={data.main.feels_like}
                  humidity={data.main.humidity}
                  wind={data.wind.speed}
                  className="min-[440px]:ml-auto min-[440px]:text-right md:text-left"
                />
              </MainCard.Root>
              <MainCard.Root className="w-full flex flex-col gap-y-2 min-[440px]:flex-row min-[440px]:flex-wrap md:max-w-fit">
                <MainCard.Title className="basis-full mb-2 min-[440px]:m-0 md:text-right" />
                <MainCard.Climate
                  climate={data.weather[0].main}
                  className="md:ml-auto md:order-2 md:text-right"
                />
                <MainCard.CurrentDay
                  dt={data.dt}
                  offset={data.timezone}
                  className="min-[440px]:ml-auto md:m-0 md:order-1"
                />
              </MainCard.Root>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherComponent;
