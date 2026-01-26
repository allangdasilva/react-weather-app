interface WeekCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const WeekCardRoot = ({ children }: WeekCardRootProps) => {
  return <div>{children}</div>;
};

export default WeekCardRoot;
