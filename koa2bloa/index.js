const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');
const session = require('koa-session-minimal');
const MysqlStroe = require('koa-mysql-session');
const config = require('./config/default');
const router = require('koa-router');
const views = require('koa-views');
const staticCache = require('koa-static-cache');

const app = new Koa();

//session 存储配置
const sessionMysqlConfig = {
    user: config.dataBase.USERNAME,
    password: config.dataBase.PASSWORD,
    database: config.dataBase.DATABASE,
    host: config.dataBase.HOST,
}

//session中间件
app.use(session({
    key: "USER_SID",
    store: new MysqlStroe(sessionMysqlConfig)
}))

//静态资源中间件
app.use(staticCache(path.join(__dirname, './public'), {
    dynamic: true
}, {
    maxAge: 24 * 60 * 60 * 365
}))

app.use(staticCache(path.join(__dirname, './images'), {
    dynamic: true
}, {
    maxAge: 24 * 60 * 60 * 365
}))

//服务器端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
app.use(bodyParser({
    formLimit: '1mb'
}))

//路由
app.use(require('./routers/signin.js').routes())
app.use(require('./routers/signup.js').routes())
app.use(require('./routers/signout.js').routes())
app.use(require('./routers/posts.js').routes())

app.listen(config.port, () => {
    console.log(`Koa2开启,开发了 ${config.port} 端口`)
})