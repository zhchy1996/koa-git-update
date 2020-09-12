/*
 * @Author: chengyuzhang 
 * @Date: 2020-09-07 19:37:12 
 * @Last Modified by: chengyuzhang
 * @Last Modified time: 2020-09-12 18:05:06
 */

const exec = require('child_process').execSync

class UserController {
    // 用户登录
    async update(ctx, next) {
        // do something
        ctx.body = {
            status: 'OK'
        }

        exec('bash ./sh/build.sh',(...rest) => {
            console.log(rest);
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
