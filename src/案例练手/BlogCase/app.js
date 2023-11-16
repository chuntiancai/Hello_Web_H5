// 引用expess框架，管理整个项目的路由
import express from "express";

 // 引入系统路径模块，处理路径
import path from "path";   

// 引入body-parser模块 用来处理post请求参数,拦截请求
import bodyPaser from "body-parser";    // 处理路径

// 导入express-session模块,处理网络会话。
import session from "express-session";

import artTemplate from  "express-art-template";

import {fileURLToPath}  from 'url';

//转换为ES语法的路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/**
 * 一、配置express的使用。
 */

// 创建网站服务器
const app = express();

// 告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));

// 告诉express框架模板的默认后缀是什么，后面通过express框架引用.art文件的时候就可以直接省略.art后缀了。
app.set('view engine', 'art');

// 当渲染后缀为art的模板时 所使用的模板引擎是什么(:是artTemplate引擎)
app.engine('art', artTemplate);



/**
 * 二、配置网络使用，连接数据库
 */

// 数据库连接,引入数据库connect.js文件，并执行
import ('./model/connect.js')

// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')))

// 使用bodyPaser模块处理拦截请求，并处理post请求参数
app.use(bodyPaser.urlencoded({extended: false}));

// 使用express-session模块来配置session会话，实现浏览器与服务端的会话功能。
app.use(session({
	secret: 'secret key',	//密钥
	saveUninitialized: false,
	cookie: {
		maxAge: 24 * 60 * 60 * 1000
	}
}));

/**
 * 三、配置请求路径的路由
 */

// 拦截请求 判断用户登录状态，使用loginGuard.js文件的逻辑来拦截/admin请求。
import loginGuard from './middleware/loginGuard.js'
app.use('/admin', loginGuard);

// 引入路由模块，即执行home.js文件，和admin.js文件。后面这两个文件分别用了处理home页和admin页面的路由逻辑。
import home from  './route/home.js'
import admin from  './route/admin.js'
// 为路由匹配请求路径，把'/home'请求路径分配给home.js文件处理。
app.use('/home', home);
app.use('/admin', admin);

/**
 * 四、配置错误处理中间件
 * 	1、调用next方法就会调用错误处理中间件。所以以后直接在return next方法里面传递json字符串，就会来到这里。
 * 	2、是调用next("未定义的路径，中间件")，然后就会走到这里来，也就是如果next到一个不知道的对象，就会当作错误信息，然后就路由到这里来。
 * 	3、如果这里处理不了错误的信息，而且抛出错误的话，就会继续由express内置的错误处理中间件处理。
 */
app.use((err, req, res, next) => {
	// 将字符串对象转换为对象类型
	// JSON.parse() 
	const result = JSON.parse(err);
	//`${result.path}?message=${result.message}`是约定好的重定向位置和参数。
	res.redirect(`${result.path}?message=${result.message}`);
})

// 监听端口
app.listen(80);
console.log('网站服务器启动成功, 请访问localhost:80')