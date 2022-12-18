const path = require("path");
const date = new Date();

let startYear = date.getFullYear();
let endYear = date.getFullYear() + 1;
let startMonth = date.getMonth() + 1;

if (startMonth === 12) {
  startMonth = 1;
  startYear = startYear + 1;
  endYear = endYear + 1;
}

exports.startYear = startYear;
exports.endYear = endYear;
exports.startMonth = startMonth;

exports.festivalJsonFilePath = path.resolve("./data/zh-cn/festival.json");
