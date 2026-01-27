import { MainCard } from "../patterns/MainCard";
import { WeekCard } from "../patterns/WeekCard";
import SearchBar from "../ui/SearchBar";
import TextBody from "../ui/TextBody";

const array = ["1", "2", "3", "4", "5", "6", "7", "8"];

const WeatherComponent = () => {
  return (
    <div className="min-h-dvh p-6 flex bg-blue-500">
      <div className="w-full max-w-322 m-auto flex flex-col gap-8">
        <SearchBar
          type="text"
          placeholder="Search by location"
          label="search-by-location"
        />
        <TextBody>Flórida, EUA</TextBody>

        <div className="flex justify-between gap-6 flex-wrap">
          <MainCard.Root className="w-full flex flex-col min-[440px]:flex-row gap-4 md:max-w-fit">
            <MainCard.Image />
            <MainCard.Celsius />
            <MainCard.Infos className="min-[440px]:ml-auto min-[440px]:text-right md:text-left" />
          </MainCard.Root>
          <MainCard.Root className="w-full flex flex-col gap-y-2 min-[440px]:flex-row min-[440px]:flex-wrap md:max-w-fit">
            <MainCard.Title className="basis-full mb-2 min-[440px]:m-0 md:text-right" />
            <MainCard.Climate className="basis-1/2 md:order-2 md:text-right" />
            <MainCard.CurrentDay className="basis-1/2 min-[440px]:text-right md:order-1" />
          </MainCard.Root>
        </div>

        <ul className="min-w-0 pb-6 flex gap-6 overflow-x-auto">
          {array.map((day) => (
            <li key={day}>
              <WeekCard.Root className="grid grid-cols-2 gap-y-2">
                <WeekCard.Day />
                <WeekCard.WeekDay />
                <WeekCard.Image />
                <WeekCard.Celsius />
              </WeekCard.Root>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherComponent;
