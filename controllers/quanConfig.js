
class UserController {
    // 用户登录
    async update(ctx, next) {
        // do something
        ctx.use()

        ctx.body = {
            status: 'OK'
        }
    }
}

module.exports = new UserController();
