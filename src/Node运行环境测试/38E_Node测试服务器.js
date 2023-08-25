/**
 * 一、创建web服务器
 */
 // 引用系统模块
 const http = require('http');
 // 用于处理url地址
const url = require('url');
  // 创建web服务器
 const app = http.createServer();
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
       console.log(req.url);
	   // 1) 要解析的url地址
	   // 2) 将url中的查询参数解析成对象形式
	   let { query, pathname } = url.parse(req.url, true);
	   console.log(query.name)
	   console.log(query.age)
   
	   if (pathname == '/index' || pathname == '/') {
	   	res.end('<h2>欢迎来到首页</h2>');
	   }else if (pathname == '/list') {
	   	res.end('welcome to listpage');
	   }else {
	   	res.end('not found');
	   }
   
	   if (req.method == 'POST') {
	   	res.end('post')
	   } else if (req.method == 'GET') {
	   	res.end('get')
	   }

	// res.end('<h2>hello user</h2>');
 });
  // 监听3000端口,启动之后，直接访问在浏览器http://localhost:3000即可
 app.listen(3000);
 console.log('服务器已启动，监听3000端口，请访问 localhost:3000')


 /**
 * 二、
 */



