const program = require('commander')

program.version('0.0.1')
  .usage('<command> [项目名称]')
  .command('init', '创建新项目')
  .parse(process.argv)

