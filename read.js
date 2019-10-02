if(typeof require !== 'undefined') XLSX = require('xlsx');
// var workbook = XLSX.readFile('test.xlsx');
// console.log(workbook.Sheets.Sheet1)

exports.read = function (filePath) {
  var workbook = XLSX.readFile(filePath);
  // console.log(workbook.Sheets.Sheet1)
  return workbook.Sheets.Sheet1.A1.w
}