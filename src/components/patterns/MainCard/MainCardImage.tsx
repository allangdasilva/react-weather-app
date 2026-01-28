import ClearDay from "../../icons/ClearDay";

interface MainCardImageProps extends React.HTMLAttributes<HTMLDivElement> {}

const MainCardImage = ({ ...props }: MainCardImageProps) => {
  return (
    <div {...props}>
      <ClearDay />
    </div>
  );
};

export default MainCardImage;
