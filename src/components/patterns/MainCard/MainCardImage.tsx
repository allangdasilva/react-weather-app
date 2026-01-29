import {
  getDayPeriod,
  getTemperatureRange,
  mapWeatherCondition,
} from "../../../api/weatherAdpter";
import { weatherVisualMap } from "../../../api/weatherVisual";

interface MainCardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  temp: number;
  sunrise: number;
  sunset: number;
  currentDt: number;
}

const MainCardImage = ({
  src,
  temp,
  sunrise,
  sunset,
  currentDt,
  ...props
}: MainCardImageProps) => {
  const condition = mapWeatherCondition(src);

  const celsius = 273.15;
  const res = Number((temp - celsius).toFixed());
  const tempRange = getTemperatureRange(res);

  const period = getDayPeriod(currentDt, sunrise, sunset);

  const visual = weatherVisualMap[condition][tempRange][period];

  return (
    <div {...props}>
      <img width={64} height={64} src={visual.image} alt="" />
    </div>
  );
};

export default MainCardImage;
