/**
 * 1、JavaScript在使用时存在两大问题，文件依赖和命名冲突。
 *      文件依赖：就是一个js文件依赖另一个js文件，然后又依赖另一个js文件，一直依赖下去。
 *      命名冲突：两个相互依赖的js文件里的变量或者函数的命名冲突了。
 * 
 * 2、 Node.js中模块化开发规范：
 *      Node.js规定一个JavaScript文件就是一个模块，模块内部定义的变量和函数默认情况下在外部无法得到。
 *      模块内部可以使用exports对象进行成员导出， 使用require方法导入其他模块。
 * 
 * 3、模块导出：
 *      导出的变量和方法，是以封装成对象的形式提供给其他模块使用。module.exports就是一个对象(node会对其进行封装成对象)。
 *      关键字exports是module.exports的别名(地址引用关系)，导出对象最终以module.exports为准。
 *     
 * 4、系统模块：
 *      1.node运行环境提供的自带的api，因为这些API都是以模块化的方式进行开发的, 所以我们又称Node运行环境提供的API为系统模块。
 *        例如：文件模块fs ,const fs = require('fs');
 * 
 *      2.系统模块的方法 回调闭包的第一个参数都是error，错误优先函数。
 *        例如：
            // 1.通过模块的名字fs对模块进行引用
            const fs = require('fs');

            // 2.通过模块内部的readFile读取文件内容
            fs.readFile('./01.helloworld.js', 'utf8', (err, doc) => {
            	// 如果文件读取出错err 是一个对象 包含错误信息
            	// 如果文件读取正确 err是 null
            	// doc 是文件读取的结果
            	console.log(err);
            	console.log(doc);
            });

   5、第三方模块：
        1.以js文件的形式存在，提供实现项目具体功能的API接口。以命令行工具形式存在，辅助项目开发。
        2.npm (node package manager) ： node的第三方模块管理工具。js都是用这个工具作为第三方包管理工具，node已经集成。
          node_modules目录：npm下载的第三方库会放在当前工程的node_modules目录下，没有则会创建该目录。
          package.json文件：项目描述文件，记录了当前项目信息，例如项目名称、版本、作者、github地址、当前项目依赖了哪些第三方模块等。
                                使用npm init -y命令生成。(相当于cocoapod的pod.file文件)
          package-lock.json文件：锁定包的版本，确保再次下载时不会因为包版本不同而产生问题。因为该文件中已经记录了项目所依赖第三方包的树状结构和包的下载地址，重新安装时只需下载即可，不需要做额外的工作


        3.npm工具有自己的终端命令：
                下载：npm install 模块名称
                卸载：npm unintall package 模块名称

        4.常用第三方模块：
            nodemon是一个命令行工具，用以辅助项目开发，可以在修改源代码的同时立即执行，刷新网页。
            nrm ( npm registry manager )：npm下载地址切换工具，可以切换npm下载第三方包时的源地址。

    6、模块查找规则(路径)： require('./find.js');
        1.require方法根据模块路径查找模块，如果是完整路径，直接引入模块。
          如果模块后缀省略，先找同名JS文件再找同名JS文件夹。
          如果找到了同名文件夹，找文件夹中的index.js。
          如果文件夹中没有index.js就会去当前文件夹中的package.json文件中查找main选项中的入口文件。
          如果找指定的入口文件不存在或者没有指定入口文件就会报错，模块没有被找到。
            
        2.当模块没有路径且没有后缀时：  require('find');
          Node.js会假设它是系统模块。
          Node.js会去node_modules文件夹中。
          首先看是否有该名字的JS文件。
          再看是否有该名字的文件夹。
          如果是文件夹看里面是否有index.js。
          如果没有index.js查看该文件夹中的package.json中的main选项确定模块入口文件。
          否则找不到报错。



 */

  // a.js
  // 在模块内部定义变量
  let myVersion = 1.0;
  // 在模块内部定义方法
  const mySayHi = name => `您好, ${name}`;
  // 向模块外部导出数据 
  exports.version = myVersion;
  exports.sayHi = mySayHi;
 

// b.js
// 在b.js模块中导入模块a,导入模块时后缀可以省略
let a = require('./a.js');  
 // 输出b模块中的version变量
console.log(a.version);
 // 调用b模块中的sayHi方法 并输出其返回值
console.log(a.sayHi('黑马讲师'));