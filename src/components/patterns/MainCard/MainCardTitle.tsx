import { twMerge } from "tailwind-merge";

interface MainCardTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const MainCardTitle = ({ ...props }: MainCardTitleProps) => {
  return (
    <h2 className={twMerge("font-lg text-light", props.className)}>Climate</h2>
  );
};

export default MainCardTitle;
