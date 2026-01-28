import { twMerge } from "tailwind-merge";

interface MainCardClimateProps extends React.HTMLAttributes<HTMLDivElement> {
  climate: string;
}

const MainCardClimate = ({ climate, ...props }: MainCardClimateProps) => {
  return (
    <div className={twMerge("font-body text-light/75", props.className)}>
      <span>{climate}</span>
    </div>
  );
};

export default MainCardClimate;
