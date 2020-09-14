/*
 * @Author: chengyuzhang 
 * @Date: 2020-09-07 19:37:12 
 * @Last Modified by: chengyuzhang
 * @Last Modified time: 2020-09-14 15:20:00
 */

const exec = require('child_process').exec
const send = require('../lib/send-mail');

class UserController {
    // 用户登录
    async update(ctx, next) {
        // do something
        ctx.body = {
            status: 'OK'
        }

        exec('bash ./sh/build.sh',(err,stdout,stderr) => {
            if (stderr || err) {
                console.error(stderr || err)
                send('error', stderr)
            } else {
                console.log(stdout)
            }
        });
    }
    
    // 用户信息
    async check(ctx, next) {
        ctx.body = {
            status: 'OK'
        };
    }
}

module.exports = new UserController();
