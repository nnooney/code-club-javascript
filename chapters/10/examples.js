const weekDay = function () {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  return {
    name(number) { return names[number]; },
    number(name) { return names.indexOf(name); }
  };
}();

console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday

let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4));
// → 5

const ordinal = require("ordinal");
const { days, months } = require("date-names");

exports.formatDate = function (date, format) {
  return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
    if (tag == "YYYY") return date.getFullYear();
    if (tag == "M") return date.getMonth();
    if (tag == "MMMM") return months[date.getMonth()];
    if (tag == "D") return date.getDate();
    if (tag == "Do") return ordinal(date.getDate());
    if (tag == "dddd") return days[date.getDay()];
  });
};

const { formatDate } = require("./format-date");

console.log(formatDate(new Date(2017, 9, 13),
  "dddd the Do"));
// → Friday the 13th

import ordinal from "ordinal";
import { days, months } from "date-names";

export function formatDate(date, format) { /* ... */ }

export default ["Winter", "Spring", "Summer", "Autumn"];

import { formatDate } from "./format-date";

console.log(formatDate(new Date(2017, 9, 13),
  "dddd the Do"));
// → Friday the 13th
