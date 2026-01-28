interface MainCardCelsius extends React.HTMLAttributes<HTMLDivElement> {
  temp: number;
}

const MainCardCelsius = ({ temp, ...props }: MainCardCelsius) => {
  const celsius = 273.15;
  const res = (temp - celsius).toFixed();

  return (
    <div {...props} className="flex font-xl text-light">
      <div>{res}</div>

      <span className="inline-block pt-1 font-body">°C</span>
    </div>
  );
};

export default MainCardCelsius;
