export const date = (newDate) => {
  // Week days
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Day/Month/Year
  const jsonDate = new Date(newDate);
  const monthDay =
    jsonDate.getDate() < 10 ? `0${jsonDate.getDate()}` : jsonDate.getDate();
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
  const date = `
    <td class="date-day">${days[day]}</td>,
    <td class="date-full">${monthDay}/${month}</td>
    <td class="date-time">@ ${hour}:${minute}</td>
`;
  return date;
};
