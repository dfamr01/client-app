import dayjs from "dayjs";

export function getFormatDate(_date) {
  const dateArr = dayjs(_date).format("ddd MMM DD h:mm A").split(" "); // e.g Aug 16
  const [day, month, date, time, ampm] = dateArr;
  return {
    day,
    month,
    date,
    time,
    ampm,
  };
}
