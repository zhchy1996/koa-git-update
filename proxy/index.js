/*
 * @Author: chengyuzhang 
 * @Date: 2020-09-15 14:15:36 
 * @Last Modified by: chengyuzhang
 * @Last Modified time: 2020-09-15 14:19:28
 */

const proxy = require('koa2-proxy-middleware'); //引入代理模块

module.exports = proxy({
    targets: {
        '/api/getConfig': {
            target: '',
            changeOrigin: true,
        },
    }
})
