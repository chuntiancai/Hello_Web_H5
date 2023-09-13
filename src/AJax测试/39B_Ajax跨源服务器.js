/**
 * 1、测试Ajax跨源的例外一个服务器，3001端口。
 */
// 引入express框架
const express = require('express');
const app = express();
// 接收post请求参数
const formidable = require('formidable');
// 实现session功能
var session = require('express-session');

// 实现session功能
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

// // 拦截所有请求
// app.use((req, res, next) => {
// 	// 1.允许哪些客户端访问我
// 	// * 代表允许所有的客户端访问我
// 	res.header('Access-Control-Allow-Origin', '*')
// 	// 2.允许客户端使用哪些请求方法访问我
// 	res.header('Access-Control-Allow-Methods', 'get,post')
// 	next();
// });

app.get('/testJsonp', (req, res) => {
	const result = 'fn1({name: "张三"})';
	res.send(result);
});

//测试withCredentials属性
app.post('/testCredentials', (req, res) => {
    /**
     * 1、在请求头中返回testCredentials，说明允许携带cookie信息
     *      客户端和服务器的请求头需要同时设置Credentials属性为true才可以。
     * 2、cookie信息主要保存在session对象中。
     */
    // 允许客户端发送跨域请求时携带cookie信息
	res.header('Access-Control-Allow-Credentials', true);

    // 1.允许哪些客户端访问我
	// * 代表允许所有的客户端访问我
	// 注意：如果跨域请求中涉及到cookie信息传递，值不可以为*号 比如是具体的域名信息
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
	// 2.允许客户端使用哪些请求方法访问我
	res.header('Access-Control-Allow-Methods', 'get,post')


    // 创建表单解析对象
	var form = new formidable.IncomingForm();
	// 解析表单
	form.parse(req, (err, fields, file) => {
		// 接收客户端传递过来的用户名和密码
		const { username, password } = fields;
		// 用户名密码比对
		if (username == 'haha' && password == '123456') {
			// 设置session
			req.session.isLogin = true;
			res.send({message: '登录成功'});
		} else {
			res.send({message: '登录失败, 用户名或密码错误'});
		}
	})

});

//检测cookie信息
app.get('/checkCredentials', (req, res) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    // 允许客户端发送跨域请求时携带cookie信息
	res.header('Access-Control-Allow-Credentials', true);
    // 2.允许客户端使用哪些请求方法访问我
	res.header('Access-Control-Allow-Methods', 'get,post')

    // 判断用户是否处于登录状态
	if (req.session.isLogin) {
		res.send({message: '处于登录状态'})
	} else {
		res.send({message: '处于未登录状态'})
	}
});

app.get('/testJsonp2', (req, res) => {
	// 接收客户端传递过来的函数的名称
	//const fnName = req.query.callback;
	// 将函数名称对应的函数调用代码返回给客户端
	//const data = JSON.stringify({name: "张三"});
	//const result = fnName + '('+ data +')';
	// setTimeout(() => {
	// 	res.send(result);
	// }, 1000)

    //当客户端请求带有callback参数时，系统已经封装了。
	res.jsonp({name: '李四', age: 20});
});


// 监听端口
app.listen(3001);
// 控制台提示输出
console.log('测试跨源访问3001端口服务器启动成功～');