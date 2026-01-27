import { twMerge } from "tailwind-merge";

interface MainCardClimateProps extends React.HTMLAttributes<HTMLDivElement> {}

const MainCardClimate = ({ ...props }: MainCardClimateProps) => {
  return (
    <div className={twMerge("font-body text-light/75", props.className)}>
      <span>Cloudy</span>
    </div>
  );
};

export default MainCardClimate;
