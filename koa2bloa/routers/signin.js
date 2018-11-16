const router = require('koa-router')();
const controller = require('../controll/c_signin')

router.get('/signin', controller.getSignin)
router.post('/signin', controller.postSignin)

module.exports = router