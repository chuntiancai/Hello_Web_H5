/**
 * 1、Express框架中使用req.query即可获取GET参数，框架内部会将GET参数转换为对象并返回。
 * 2、Express中接收post请求参数需要借助第三方包 body-parser。需要使用npm install body-parser命令下载。
 * 3、express可以把url的路径作为请求参数处理，也就是不用?符号分割参数，而是直接把路径的值作为参数(/123)。
 * 4、通过Express内置的express.static可以方便地托管静态文件，例如img、CSS、JavaScript 文件等。
 * 
 */

// 引入express框架
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');  //解析post参数
// 创建网站服务器
const app = express();

/**
 * 一、处理GET、POST请求参数的解析。
 */
// http://localhost:3000/index?name=%27%E5%BC%A0%E4%B8%89%27&age=18
app.get('/index', (req, res) => {
	// 获取get请求参数
	res.send(req.query)
})

// 拦截所有请求
// extended: false 方法内部使用querystring系统模块处理请求参数的格式
// extended: true 方法内部使用第三方模块qs处理请求参数的格式
app.use('/post/add',bodyParser.urlencoded({extended: false}))

app.post('/post/add', (req, res) => {
	// 接收post请求参数
	res.send(req.body)
})

/**
 * 二、处理url的路由参数。
 */
//路径/index后面的路径分别作为id、name、age的参数
app.get('/index2/:id/:name/:age', (req, res) => {
	// 封装成json对象，{"id":"123","name":"zhangsan","age":"18"}
	res.send(req.params)
})


/**
 * 三、静态资源的访问。
 * 现在，public 目录下面的文件就可以访问了。
 * http://localhost:3000/images/kitten.jpg
 * http://localhost:3000/css/style.css
 * http://localhost:3000/js/app.js
 * http://localhost:3000/images/bg.png
 * http://localhost:3000/hello.html 
 */
// 实现静态资源访问功能
app.use('/static',express.static(path.join(__dirname, 'public')))

// 端口监听
app.listen(3000);
console.log('请求处理服务器启动')