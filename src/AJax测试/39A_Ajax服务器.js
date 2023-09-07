// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
//2、body-parser第三方框架用于解释Post请求的参数。
const bodyParser = require('body-parser');
const fs = require('fs');
// 创建web服务器
const app = express();

app.use(bodyParser.json());

//设置跨域访问(跨源访问)
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");	//允许从别的域名过来访问当前服务器的资源，*是通配符，你可以指定特定的别的域名。
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 静态资源访问服务功能,html、css、img等文件。默认访问index.html文件。
app.use(express.static(path.join(__dirname, '示例html')));

// 测试访问服务器
app.get('/first', (req, res) => {
	res.send('Hello, Ajax测试,first');
});

// 返回响应给客户端
app.get('/responseData', (req, res) => {
	res.send({"name": "zs"});
});

// 处理Ajax的get请求
app.get('/get', (req, res) => {
	console.log('处理Ajax的get请求。')
	res.send(req.query);
});

// 处理Ajax的post请求，body-parser第三方框架用于解释Post请求的参数。
app.post('/post', (req, res) => {
	console.log('处理Ajax的post请求。')
	res.send(req.body);	//req.body已经被body-parser解析了
});

// Ajax处理服务器响应，Ajax状态码
app.get('/readystate', (req, res) => {
	res.send('hello，Ajax处理服务器响应，Ajax状态码');
});

// Ajax错误处理
app.get('/ajaxError', (req, res) => {
	//console.log(abc);
	res.status(400).send(' 服务器Ajax错误处理 not ok');
});


// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('测试Ajax的服务器启动成功');