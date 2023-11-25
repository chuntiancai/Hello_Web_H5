/**
 * 1、模块化路由，因为一个网站路由的路径是非常巨大繁多的，所以需要对路由资源进行分类统一管理，Express框架提供了模块化路由的功能。
 *  
 */

// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();
// 创建路由对象
const home = express.Router();
// 为路由对象匹配请求路径
app.use('/home', home);
// 创建二级路由
home.get('/index', (req, res) => {
    // 路径：/home/index 
	res.send('/home/index 二级路由的get方法')
})

/**
 * 二、使用自定义的路由模块。
 */
const home2 = require('./39C自定义的路由模块/home');
const admin = require('./39C自定义的路由模块/admin');

app.use('/home2', home2);
app.use('/admin', admin);


// 端口监听
app.listen(3000);
console.log('模块化路由服务器启动成功');