const router = require('koa-router')();
const controll = require('../controll/c_signup');

//注册页面
router.get('/signup', controll.getSignup);
//post 注册
router.post('/signup', controll.postSignup);

module.exports = router