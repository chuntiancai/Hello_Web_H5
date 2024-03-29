/**
 * 1、文件模块是js，文件路径拼接的模块是path。
 * 2、相对路径VS绝对路径：
 *      大多数情况下使用绝对路径，因为相对路径有时候相对的是命令行工具的当前工作目录。
 *      在读取文件或者设置文件路径时都会选择绝对路径，使用__dirname获取当前文件所在的绝对路径。
 *      __dirname：当前文件的绝对路径
 *      requir()方法取的是相对路径。
 * 3、系统util模块，可以对文件模块的readFile方法进行了异步编程的封装，util模块中的promisify方法，把readFile方法的返回封装成了Promise对象。

 */

const fs = require('fs');   //文件模块
const path = require('path');   //路径模块

// 路径拼接：public/uploads/avatar
const finalPath = path.join('public', 'uploads','avatar');
console.log(finalPath);

// 路径的默认变量
console.log('当前文件夹的绝对路径：' ,__dirname);
console.log('拼接绝对路径：' ,path.join(__dirname, '38A_HelloNode.js'))

fs.readFile(path.join(__dirname, '38A_HelloNode.js'), 'utf8', (err, doc) => {
	
	if (err != null) {
		console.log('读取文件失败：' + err)
		return
	} else {
		console.log('读取文件成功：' + doc)
	}
	
});

/**
 * 二、测试util的promisify方法，可以异步编程封装fs.readFile方法。
 * 	1、util模块中的promisify方法，把fs.readFile方法的返回封装成了Promise对象。
 */
// 改造现有异步函数api 让其返回promise对象 从而支持异步函数语法。promisify后面不能加括号，不然就是调用promisify()方法了。
const promisify = require('util').promisify;
// 调用promisify方法改造现有异步API 让其返回promise对象
const readFile = promisify(fs.readFile);

async function run () {
	//这里并没有处理异常，需要你自己catch异常。
	let r1 = await readFile('./1.txt', 'utf8')
	let r2 = await readFile('./2.txt', 'utf8')
	let r3 = await readFile('./3.txt', 'utf8')
	console.log(r1)
	console.log(r2)
	console.log(r3)
}

run();