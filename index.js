const fs = require('fs');
const path = require('path');//解析需要遍历的文件夹
const filePath = path.resolve('./input');
const {read} = require('./read');
const {writeCSV} = require('./csv');
let result = [];

//文件遍历方法
const fileDisplay = filePath => {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.warn(err)
    } else {
      //遍历读取到的文件列表
      for (let i = 0; i < files.length; i++) {
        //获取当前文件的绝对路径
        const filename = files[i];
        const filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, (eror, stats) => {
          if (eror) {
            console.warn('获取文件stats失败');
          } else {
            const isFile = stats.isFile();//是文件
            const isDir = stats.isDirectory();//是文件夹
            if (isFile) {
              console.log(filedir);
              // 读取文件内容
              const content = read(filedir).join(',');
              result.push(content)
            }
            if (isDir) {
              fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }

            if (result.length === files.length) {
              writeCSV('output/result.csv', result.join(','))
            }
          }
        })
      }
    }
  });
}

//调用文件遍历方法
fileDisplay(filePath)

