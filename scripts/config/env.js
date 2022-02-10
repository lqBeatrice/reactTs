/*
 * Description: 管理启动环境
 * Created by: betty.liang
 * Creation time: 2022/2/10 16:22
 * Modification description: 
 * Modified by: 
 * Modification time: 2022/2/10 16:23
 * Version: V1.0
 */

const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  isDevelopment,
  isProduction,
}
