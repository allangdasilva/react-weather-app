import { MainCard } from "../patterns/MainCard";
import { WeekCard } from "../patterns/WeekCard";
import SearchBar from "../ui/SearchBar";
import TextBody from "../ui/TextBody";

const WeatherComponent = () => {
  return (
    <div>
      WeatherComponent
      <SearchBar
        type="text"
        placeholder="Search by location"
        label="search-by-location"
      />
      <TextBody />
      <MainCard.Root>
        <MainCard.Image />
        <MainCard.Celsius />
        <MainCard.Infos />
      </MainCard.Root>
      <MainCard.Root>
        <MainCard.Title />
        <MainCard.CurrentDay />
      </MainCard.Root>
      <WeekCard.Root>
        <WeekCard.Day />
        <WeekCard.WeekDay />
        <WeekCard.Image />
        <WeekCard.Celsius />
      </WeekCard.Root>
    </div>
  );
};

export default WeatherComponent;
