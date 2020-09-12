/*
 * @Author: chengyuzhang 
 * @Date: 2020-09-07 19:37:12 
 * @Last Modified by: chengyuzhang
 * @Last Modified time: 2020-09-12 17:37:09
 */

const exec = require('child_process').execSync

class UserController {
    // 用户登录
    async update(ctx, next) {
        // do something
        exec('bash ./sh/build.sh',(...rest) => {
            console.log(rest);
        });

        ctx.body = {
            status: 'OK'
        }
    }
    
    // 用户信息
    async check(ctx, next) {
        ctx.body = {
            status: 'OK'
        };
    }
}

module.exports = new UserController();
