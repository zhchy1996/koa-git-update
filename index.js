/*
 * @Author: chengyuzhang 
 * @Date: 2020-09-07 19:39:00 
 * @Last Modified by: chengyuzhang
 * @Last Modified time: 2020-09-12 17:27:57
 */

const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const apiRouter = require('./router');

const app = new koa();

// 首页
const index = router.get('/', ctx => {
    ctx.response.body = 'hello world';
}).routes();

app.use(index);
app.use(bodyParser());
app.use(apiRouter.routes());

app.listen(3000);
