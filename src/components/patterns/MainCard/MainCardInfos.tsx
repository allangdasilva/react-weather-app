import { twMerge } from "tailwind-merge";

interface MainCardInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

const MainCardInfos = ({ ...props }: MainCardInfoProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 font-xs text-light/75",
        props.className,
      )}
    >
      <div>
        Rain: <span>10%</span>
      </div>
      <div>
        Humidity: <span>80%</span>
      </div>
      <div>
        Wind: <span>20 m/s</span>
      </div>
    </div>
  );
};

export default MainCardInfos;
