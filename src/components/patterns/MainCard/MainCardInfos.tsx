import { twMerge } from "tailwind-merge";

interface MainCardInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  feels_like: number;
  humidity: number;
  wind: number;
}

const MainCardInfos = ({
  feels_like,
  humidity,
  wind,
  ...props
}: MainCardInfoProps) => {
  const celsius = 273.15;
  const res = (feels_like - celsius).toFixed();

  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 font-xs text-light/75",
        props.className,
      )}
    >
      <div>
        Feels like: <span>{res}°</span>
      </div>
      <div>
        Humidity: <span>{humidity}%</span>
      </div>
      <div>
        Wind: <span>{wind} m/s</span>
      </div>
    </div>
  );
};

export default MainCardInfos;
