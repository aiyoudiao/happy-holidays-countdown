const path = require("path");
const date = new Date();

exports.startYear = date.getFullYear();
exports.endYear = date.getFullYear() + 2;
exports.startMonth = date.getMonth() + 1;
exports.endMonth = 1;

exports.festivalJsonFilePath = path.resolve("./data/zh-cn/festival.json");
