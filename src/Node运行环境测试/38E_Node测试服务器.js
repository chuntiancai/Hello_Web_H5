/**
 * 一、创建web服务器
 * 	1、__dirname全局变量 表示当前文件的路径。但是这个是COMMONJS的配置，不是ES的默认配置，需要转换。
 */

//下面两句是为了兼容node.js 14版以下版本，因为require作为COMMONJS的一个命令已不再直接支持使用，所以我们需要导入createRequire命令才可以。
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

 // 引用系统模块
 const http = require('http');
 // 用于处理url地址
const url = require('url');
// 处理请求参数模块，把请求参数封装成对象。
const querystring = require('querystring');

  // 创建web服务器
 const app = http.createServer();

//根据request请求的路径，返回对应的mime类型。第三方
 const mime = require('mime');

 //系统模块，处理路径
 const path = require('path');


  // 当客户端发送请求的时候，服务器就会响应
 app.on('request', (req, res) => {
     // 获取请求方式
	 // req.method
	 // console.log(req.method);
    
	 // 获取请求地址，请求地址是指已经定位到端口之后的那个相对地址。
	 // req.url
	 // console.log(req.url);
    
	 // 获取请求报文信息
	 // req.headers
	 // console.log(req.headers['accept']);

     console.log('打印请求方法：',req.method)

     //  end方法进行响应，并结束当前请求
	//    res.end('<h1>hi, user</h1>');

    res.writeHead(200, {
	'content-type': 'text/html;charset=utf8'
	});
   
	/**
	 * 一、处理url路径
	 */
	console.log('打印请求的相对路径：' + req.url);
    console.log('打印请求的解析后的相对路径：' +  url.parse(req.url).pathname);
	// 获取用户的请求路径
	let pathname = url.parse(req.url).pathname;
	pathname = pathname == '/' ? '/default.html' : pathname;
	// 将用户的请求路径转换为实际的服务器硬盘路径
	let realPath = path.join(__dirname, 'public' + pathname);
	let type = mime.getType(realPath)
	console.log('根据请求路径转换出来的mime的类型：' + type)
   
	/**
	 * 二、处理GET、POST方法
	 */
	if (req.method == 'GET') {

		console.log('get 请求')
		// 1) 要解析的url地址
		// 2) 将url中的查询参数解析成对象形式
		let { query, pathname } = url.parse(req.url, true);
		console.log('解析get请求参数name：' + query.name)
		console.log('解析get请求参数age：' + query.age)	
		
		//处理客户端请求路由的路径。
		if (pathname == '/index' || pathname == '/') {
			res.write('<h2>欢迎来到首页</h2>');
		}else if (pathname == '/list') {
			res.write('welcome to listpage 欢迎');
		}else {
			res.write('not found 找不到');
		}
		res.end('get ok')

	}else if (req.method == 'POST') {
     	// post参数是通过事件的方式接受的
	 	// data 当客户端请求参数传递的时候触发服务端的data事件
	 	// end 当客户端参数传递完成的时候触发服务端的end事件，不调用end函数，则客户端一直处于等待状态。
     	let postParams = '';

	 	req.on('data', params => {
	 		postParams += params;
	 	});

	 	req.on('end', () => {
	 		console.log('把请求参数封装成对象：');
	 		console.log(querystring.parse(postParams));
	 	});
		res.end('post ok')
	}

	// res.end('<h2>hello user</h2>');
 });
  // 监听3000端口,启动之后，直接访问在浏览器http://localhost:3000即可
 app.listen(3000);
 console.log('服务器已启动，监听3000端口，请访问 localhost:3000')


 /**
 * 二、
 */



