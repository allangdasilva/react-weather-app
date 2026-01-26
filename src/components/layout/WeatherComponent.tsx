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
    </div>
  );
};

export default WeatherComponent;
