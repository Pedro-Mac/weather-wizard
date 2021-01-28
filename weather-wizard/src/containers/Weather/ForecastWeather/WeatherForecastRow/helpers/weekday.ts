export const getWeekDay = (date: number) => {
  const weekDaysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dateToMilliseconds = date * 1000;

  const dateString = new Date(dateToMilliseconds);
  const weekDay = weekDaysList[dateString.getDay()];

  return weekDay;
};
