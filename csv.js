const fs = require('fs');

exports.writeCSV = (filename, content) => {
  fs.writeFile(filename, content, err => {
    if (err) {
      console.error('Server is error...')
    }
  })
}