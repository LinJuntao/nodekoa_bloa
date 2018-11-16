# 基于koa2的个人微博小项目

#### 项目介绍
基于koa2的个人微博小项目，打算以这个小demo练练手，熟悉一下koa、node的写法
》该项目是模仿CSDN 一位大佬的代码
》他的文章地址为：https://blog.csdn.net/wclimb/article/details/77890793
》有兴趣的小伙伴可以上去查看，他会解释得更清楚
>我自己写完后，也在阿里云搭建了环境，预览地址为：http://120.78.75.213:3000

#### 软件架构
软件架构说明
使用MySQL数据库；<br>
default.js 为连接数据库的配置文件，<br>
mysql.js 为运行sql指令的文件,<br>
public 为存放静态文件，以及头像的文件夹，<br>
routers 为koa路由文件夹,<br>
根目录 index.js 为项目启动文件

#### 安装教程

1. 创建数据库：koabloa ，编码：utf-8
2. 在根目录下执行 npm install
3. 执行 node index.js 便可以执行程序

#### 使用说明

1.只要创建数据库，只要运行文件，便可以自己创建需要的数据库表格
2.若需修改数据库，只要在config文件夹下的default.js 文件中修改即可

## 以下使用依赖库的说明

koa node框架<br>
koa-bodyparser 表单解析中间件<br>
koa-mysql-session、koa-session-minimal 处理数据库的中间件<br>
koa-router 路由中间件<br>
koa-static 静态资源加载中间件<br>
ejs 模板引擎<br>
md5 密码加密<br>
moment 时间中间件<br>
mysql 数据库<br>
markdown-it markdown语法<br>
koa-views 模板呈现中间件<br>
chai mocha 测试使用<br>
koa-static-cache 文件缓存

