/**
 * 1、app.use中间件用法：
 *      1.app.use 匹配所有的请求方式，可以直接传入请求处理函数，代表接收所有的请求。
 *      2.app.use 第一个参数也可以传入请求地址，代表不论什么请求方式，只要是这个请求地址就接收这个请求。
 */

// 引入express框架
const express = require('express');
const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
// 创建网站服务器
const app = express();

// 接收所有请求的中间件
// app.use((req, res, next) => {
// 	console.log('请求走了app.use中间件');
// 	next()
// })

// 当客户端访问/request请求的时候走当前中间件
app.use('/request', (req, res, next) => {
	console.log('请求走了app.use / request中间件')
	next()
})

app.get('/list', (req, res) => {
	res.send('/list')
})

app.get('/request', (req, res, next) => {
	req.name = "张三";
	next();
})

app.get('/request', (req, res) => {
	res.send('中间件结束：' + req.name)
})
/**
 * 一、处理错误逻辑中间件
 *  app.use((err, req, res, next) => { //错误处理 })   //错误处理中间件 
 *  1、在同步代码中，需要throw new Error('程序发生了未知错误')，才会抛给错误处理中间件接收处理。
 */

app.get('/error', (req, res, next) => {
	// throw new Error('程序发生了未知错误')，同步代码，会直接抛给错误处理中间件接收。
	fs.readFile('./01.js', 'utf8', (err, result) => {
		if (err != null) {
			next(err)   //异步需要next(err)，才会给错误中间件接收。
		}else {
			res.send(result)
		}
	})

	// res.send('程序正常执行')
})

//try-catch抛出错误
app.get('/error2', async (req, res, next) => {
	try {
		await readFile('./aaa.js')
	}catch (ex) {
		next(ex);
	}
})

// 当同步代码throw new Error时，就会走到这里，错误处理中间件。异步代码，需要手动next(err)才可以到这里。
app.use((err, req, res, next) => {
	res.status(500).send(err.message);
})


// 监听端口
app.listen(3000);
console.log('网站服务器启动成功');