interface WeekCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const WeekCardRoot = ({ children }: WeekCardRootProps) => {
  return <div className="p-4 rounded-lg bg-light/5">{children}</div>;
};

export default WeekCardRoot;
