/**
 * 1、为了使art-template模板引擎能够更好的和Express框架配合，模板引擎官方在原art-template模板引擎的基础上封装了express-art-template。
 *     使用npm install art-template express-art-template命令进行安装。
 * 2、将变量设置到app.locals对象下面，这个数据在所有的模板中(art文件)都可以获取到。
 */

const express = require('express');
const path = require('path');
const app = express();

// 1.告诉express框架使用什么模板引擎渲染什么后缀的模板文件
//  1.模板后缀  2.使用的模板引擎
app.engine('art', require('express-art-template'))
// 2.告诉express框架模板存放的位置是什么，第一个'views'是模板的意思。
app.set('views', path.join(__dirname, '../38J测试模版引擎的目录/views'))
// 3.告诉express框架模板的默认后缀是什么,'view engine'是模板引擎的意思。
app.set('view engine', 'art');

app.get('/index', (req, res) => {
	// 1. 拼接模板路径
	// 2. 拼接模板后缀
	// 3. 哪一个模板和哪一个数据进行拼接
	// 4. 将拼接结果响应给了客户端
	res.render('index2', {
		msg: 'message 传递信息'
	})
});

app.get('/list', (req, res) => {
	res.render('index2', {
		msg: 'list page'
	})
})

/**
 * 一、app.locals对象存储数据
 */
app.locals.users = [{
	name: 'zhangsan',
	age: 20
},{
	name: '李四',
	age: 30
}]

// 端口监听
app.listen(3000);
console.log(' Express 模板引擎服务器启动')