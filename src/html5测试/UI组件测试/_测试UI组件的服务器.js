// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
const formidable = require('formidable');   //用于处理客户端传过来的FormData对象。
// 创建web服务器
const app = express();

//设置跨域访问(跨源访问)
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");	//允许从别的域名过来访问当前服务器的资源，*是通配符，你可以指定特定的别的域名。
	next()
});
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
	res.send('这是测试UI组件的服务器')
})

//测试FormData对象
app.post('/formData', (req, res) => {
	// 创建formidable表单解析对象
	const form = new formidable.IncomingForm();
	// 解析客户端传递过来的FormData对象
	form.parse(req, (err, fields, files) => {
        console.log('解析客户端传过来的formdata对象：',fields)
		res.send(fields);
	});
});

// 实现客户当上传文件的路由，即服务器接收文件。
app.post('/upload', (req, res) => {
	// 创建formidable表单解析对象
	const form = new formidable.IncomingForm();
	// 设置客户端上传文件的存储路径
	form.uploadDir = path.join(__dirname, 'public', 'uploads');
	// 保留上传文件的后缀名字
	form.keepExtensions = true;
	// 解析客户端传递过来的FormData对象
	form.parse(req, (err, fields, files) => {
        console.log('服务解析出的form对象：',files.attrName)
		// 将客户端传递过来的文件地址响应到客户端
		res.send({
			path: files.attrName.path
		});
	});
});

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('测试UI组件的服务器启动成功');