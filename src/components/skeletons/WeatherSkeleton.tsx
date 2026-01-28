const WeatherSkeleton = () => {
  return (
    <div role="status" className="flex flex-col gap-6 animate-pulse">
      <div className="h-6 w-full max-w-48 bg-light/40 rounded-lg"></div>
      <div className="flex flex-col gap-6 w-full md:flex-row md:justify-between">
        <div className="h-24 w-full bg-light/40 rounded-lg md:max-w-90"></div>
        <div className="h-24 w-full bg-light/40 rounded-lg md:max-w-90"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default WeatherSkeleton;
