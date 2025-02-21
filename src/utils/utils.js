export const getPersianDate = () => {
  const now = new Date();
  const persianDateFormatter = new Intl.DateTimeFormat("fa-IR", {
    calendar: "persian",
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return persianDateFormatter.format(now);
};

export const toPersianNumber = (number) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};
