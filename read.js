const XLSX = require('xlsx');

exports.read = function (filePath, col = 'A') {
  const workbook = XLSX.readFile(filePath);
  const cols = Object.keys(workbook.Sheets.Sheet1).filter(item => item.startsWith(col))
  return cols.map(col => workbook.Sheets.Sheet1[col].w);
}