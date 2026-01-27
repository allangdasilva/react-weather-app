import { twMerge } from "tailwind-merge";

interface MainCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const MainCardRoot = ({ children, ...props }: MainCardRootProps) => {
  return (
    <div className={twMerge("p-4 rounded-lg bg-light/15", props.className)}>
      {children}
    </div>
  );
};

export default MainCardRoot;
