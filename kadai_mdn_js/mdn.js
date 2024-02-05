// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// // British English uses day-month-year order and 24-hour time without AM/PM
// console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// // Expected output: "20/12/2012, 03:00:00"

// // Korean uses year-month-day order and 12-hour time with AM/PM
// console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
// // Expected output: "2012. 12. 20. 오전 3:00:00"

const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 曜日を加えて月とともに長い書式で表す
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// アプリケーションで UTC を用いてそれを示したい場合
options.timeZone = "UTC";
options.timeZoneName = "short";

console.log(date.toLocaleString("en-US", options));
// → "Thursday, December 20, 2012, GMT"

// 米国でも 24 時間制を使うことがある
console.log(date.toLocaleString("en-US", { hour12: false }));
// → "12/19/2012, 19:00:00"
