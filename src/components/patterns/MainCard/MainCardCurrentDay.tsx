import { twMerge } from "tailwind-merge";

interface MainCardCurrentDayProps extends React.HTMLAttributes<HTMLDivElement> {
  dt: number;
  offset: number;
}

const MainCardCurrentDay = ({
  dt,
  offset,
  ...props
}: MainCardCurrentDayProps) => {
  function formatTimestamp(timestamp: number, locale = "en") {
    const date = new Date((timestamp + offset) * 1000);

    return {
      weekDay: new Intl.DateTimeFormat(locale, {
        weekday: "long",
        timeZone: "UTC",
      }).format(date),

      time: new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
      }).format(date),
    };
  }

  const { weekDay, time } = formatTimestamp(dt);

  return (
    <div className={twMerge("font-body text-light/75", props.className)}>
      <span>
        {weekDay}, {time}
      </span>
    </div>
  );
};

export default MainCardCurrentDay;
