interface MainCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const MainCardRoot = ({ children }: MainCardRootProps) => {
  return <div className="p-4 rounded-lg bg-light/15">{children}</div>;
};

export default MainCardRoot;
