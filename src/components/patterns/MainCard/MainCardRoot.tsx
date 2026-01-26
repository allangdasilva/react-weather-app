interface MainCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const MainCardRoot = ({ children }: MainCardRootProps) => {
  return <div>{children}</div>;
};

export default MainCardRoot;
