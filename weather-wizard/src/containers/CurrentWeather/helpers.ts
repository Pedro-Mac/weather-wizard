export const modifyDate = () => {
  let [weekDay, month, day, year, time] = new Date().toString().split(" ");
  //Get hour and minutes
  time = time.slice(0, 5);
  //change x1, x2 and x3 to x1st, x2nd and x3rd from twenties on
  if (day[0] !== "1" && day[1] === "1") {
    day = `${day}st`;
  } else if (day[0] !== "1" && day[1] === "2") {
    day = `${day}nd`;
  } else if (day[0] !== "1" && day[1] === "3") {
    day = `${day}rd`;
  } else {
    day = `${day}th`;
  }
  return `${weekDay}, ${day} of ${month} ${time}`;
};
