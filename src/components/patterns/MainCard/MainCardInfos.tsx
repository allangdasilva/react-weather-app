const MainCardInfos = () => {
  return (
    <div className="flex flex-col gap-2 font-xs text-light/75">
      <div>
        Rain: <span>10%</span>
      </div>
      <div>
        Humidity: <span>80%</span>
      </div>
      <div>
        Wind: <span>20 m/s</span>
      </div>
    </div>
  );
};

export default MainCardInfos;
