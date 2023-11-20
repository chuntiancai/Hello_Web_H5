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


// 这个是express的global属性，可以去访问电脑系统的环境变量。可以由此来设置当前项目是开发环境还是生产环境。
// process.env.MyValue

// 导入config模块，可以访问不同环境下的属性数据。就是访问json配置文件。
import config from 'config'
console.log('当前环境是：',config.get('title'))

// 导入dateformat第三方模块，处理时间格式
import dateFormat from "dateformat";

// 导入art-tempate模板引擎，其实express框架内部也是集成了art-template模板。
import template from "art-template";
// 向第三方模板内部导入另外一个第三方模版dateFormate变量
template.defaults.imports.dateFormat = dateFormat;

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
import ('./model/connectDB.js')

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
	console.log('app.js的错误处理中间件：',err)
	const result = JSON.parse(err);
	// {path: '/admin/user-edit', message: '密码比对失败,不能进行用户信息的修改', id: id}
	let params = [];
	for (let attr in result) {
		if (attr != 'path') {
			params.push(attr + '=' + result[attr]);
		}
	}
	//拼凑成get的url请求，重定向到url。
	res.redirect(`${result.path}?${params.join('&')}`);
})

// 监听端口
app.listen(80);
console.log('网站服务器启动成功, 请访问localhost:80')