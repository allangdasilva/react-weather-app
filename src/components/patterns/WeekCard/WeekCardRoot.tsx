import { twMerge } from "tailwind-merge";

interface WeekCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const WeekCardRoot = ({ children, ...props }: WeekCardRootProps) => {
  return (
    <div className={twMerge("w-35 p-4 rounded-lg bg-light/5", props.className)}>
      {children}
    </div>
  );
};

export default WeekCardRoot;
