export const date = (newDate) => {
  // Week days
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Day/Month/Year
  const jsonDate = new Date(newDate);
  const monthDay = jsonDate.getDate();
  const month =
    jsonDate.getMonth() + 1 < 10
      ? `0${jsonDate.getMonth() + 1}`
      : jsonDate.getMonth() + 1;
  const year = jsonDate.getFullYear();
  // Week day
  const day = jsonDate.getDay();
  // Time
  const hour =
    jsonDate.getUTCHours() < 10
      ? `0${jsonDate.getUTCHours()}`
      : jsonDate.getUTCHours();
  const minute =
    jsonDate.getMinutes() < 10
      ? `0${jsonDate.getMinutes()}`
      : jsonDate.getMinutes();
  const date = `<div class="date"><div class="date-day">${days[day]}</div> <div class="date-full">${monthDay}/${month}/${year}</div> <div class="date-time">${hour}:${minute}</div></div>`;
  return date;
};
