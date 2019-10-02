var data = [
  ['姓名', '性别', '年龄', '注册时间'],
  ['张三', '男', 18, new Date()],
  ['李四', '女', 22, new Date()]
];

if (typeof require !== 'undefined') {
  fs = require('fs');
}
let str = JSON.stringify(data, null, "\t")

fs.writeFile('data.json', str, function (err) {
  if (err) {
    res.status(500).send('Server is error...')
  }
})