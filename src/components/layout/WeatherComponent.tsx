import SearchBar from "../ui/SearchBar";

const WeatherComponent = () => {
  return (
    <div>
      WeatherComponent
      <SearchBar
        type="text"
        placeholder="Search by location"
        label="search-by-location"
      />
    </div>
  );
};

export default WeatherComponent;
