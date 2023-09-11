/**
 * 1、测试Ajax跨源的例外一个服务器，3001端口。
 */
// 引入express框架
const express = require('express');
const app = express();

// 拦截所有请求
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