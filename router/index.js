/*
 * @Author: chengyuzhang 
 * @Date: 2020-09-07 19:38:14 
 * @Last Modified by: chengyuzhang
 * @Last Modified time: 2020-09-12 17:37:09
 */

 // 加载依赖
const router = require('koa-router')();
const userctrl = require('../controllers/git-hook.js');

router
    .post('/api/git/update', userctrl.update)
    .get('/api/git/check', userctrl.check);

module.exports = router;
