import { twMerge } from "tailwind-merge";

interface MainCardCurrentDayProps extends React.HTMLAttributes<HTMLDivElement> {}

const MainCardCurrentDay = ({ ...props }: MainCardCurrentDayProps) => {
  return (
    <div className={twMerge("font-body text-light/75", props.className)}>
      <span>Wednesday, 11:00</span>
    </div>
  );
};

export default MainCardCurrentDay;
