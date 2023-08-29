/**
 * 1、文件模块是js，文件路径拼接的模块是path。
 * 2、相对路径VS绝对路径：
 *      大多数情况下使用绝对路径，因为相对路径有时候相对的是命令行工具的当前工作目录。
 *      在读取文件或者设置文件路径时都会选择绝对路径，使用__dirname获取当前文件所在的绝对路径。
 *      __dirname：当前文件的绝对路径
 *      requir()方法取的是相对路径。

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