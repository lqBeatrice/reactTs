/*
 * Description: 管理公共常量
 * Created by: betty.liang
 * Creation time: 2022/2/10 16:23
 * Modification description: 
 * Modified by: Please set LastEditors
 * Modification time: 2022/2/10 16:23
 * Version: V1.0
 */
const path = require('path')

const PROJECT_PATH = path.resolve(__dirname, '../')   // 项目根路径

const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = 3000

module.exports = {
  PROJECT_PATH,
  SERVER_HOST,
  SERVER_PORT,
}