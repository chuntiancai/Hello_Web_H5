/**
 *  js提供数据，模版文件art提供html(文件)字符串内容。用js的数据去填充模版字符串，形成可交互的html文件。
 * 
 * 1、模版引擎是第三方框架，目的让开发者以更加友好的方式拼接字符串，例如拼接整个html文件的字符串。
 *     art-template模板引擎(腾讯的)：
 *      1.在命令行工具中使用 npm install art-template 命令进行下载。
 *       2.使用const template = require('art-template')引入模板引擎。
 *       3.告诉模板引擎要拼接的数据和模板在哪 const html = template(‘模板路径’, 数据);
 *       4.使用模板语法告诉模板引擎，模板与数据应该如何进行拼接。
 * 
 * 2、art-template同时支持两种模板语法：标准语法和原始语法
 *     标准语法可以让模板更容易读写，原始语法具有强大的逻辑处理能力：
 *       标准语法： {{ 数据 }}
 *       原始语法：<%= 数据  %>
 * 
 *     如果数据中携带HTML标签，默认模板引擎不会解析标签，如果需要则需要转义后输出：
 *          标准语法：{{@ 数据 }}
 *          原始语法：<%-数据 %>
 * 
 *     if条件判断语法：
 *          <!-- 标准语法 --> 
 *              {{if 条件}} ... {{/if}}     //{{/if}}表示if语句结束 
 *              {{if v1}} ... {{else if v2}} ... {{/if}}
 *          <!-- 原始语法 -->
 *              <% if (value) { %> ... <% } %>      //<% %> 用于识别JS语句
 *              <% if (v1) { %> ... <% } else if (v2) { %> ... <% } %>
 *
 *      each循环语法：
 *          <!-- 标准语法 -->
 *               {{each target}}
 *                   {{$index}} {{$value}}  //遍历的索引$index，值$value
 *               {{/each}}
 *           <!-- 原始语法 -->
 *               <% for(var i = 0; i < target.length; i++){ %>
 *                   <%= i %> <%= target[i] %>
 *               <% } %>
 * 
 *      子模版：使用子模板可以将网站公共区块(头部、底部)抽离到单独的文件中。
 *           <!-- 标准语法 -->
 *               {{include './header.art'}}
 *           <!-- 原始语法 -->
 *               <% include('./header.art') %>
 * 
 * 3、模板填充(继承)：
 *      可以理解为模板文件为一个模板，然后往模板里面不断地填坑(填充内容)
 *      坑一：填充css内容
 *      坑二：填充js内容
 *      坑三：填充页面主体内容
 *          art-template模板继承语法，在html文件中引入模板，block关键字，也就是把一个art文件合并到另一个art文件中。
 *          在JS文件中写art-template对象的语句，在art文件写模版语法的语句。
 *          art文件与art文件之间的引用可以直接通过模版语法实现，不经过art-template对象的js文件中的js语句。
 * 
 *           <!--组合使用填充物的模板-->
 *              {{extend './layout.art'}}   //引入填充物模版。
 *              {{block 'head'}} <link rel="stylesheet" href="custom.css"> {{/block}}   //往填充物模版里面填充内容。定义堆料'head'
 *              {{block 'content'}} <p>This is just an awesome page.</p> {{/block}}     //定义堆料'content'
 *              
 *          //作为填充物的模版
 *          <body>
 *                {{block 'content'}}{{/block}} //填充堆料的占位语句，坑
 *          </body>
 *      
 * 
 */

// 导入模板引擎
const template = require('art-template');
const path = require('path');

const viewsPath = path.join(__dirname, '38J测试模版引擎的目录','views', 'index.art');
const headerPath = path.join(__dirname, '38J测试模版引擎的目录','common', 'headerIndex.art');

const headerHtml = template(headerPath,{
    headerName:'测试子模板的数据'
})

// template方法是用来拼接字符串的
// 1. 模板路径 绝对路径
// 2. 要在模板中显示的数据 对象类型
// 返回拼接好的字符串
const html = template(viewsPath, {
	name: '姓名',
	age: 20,
    /**
     * 如果数据中携带HTML标签，默认模板引擎不会解析标签，如果需要解析则需要在模板文本中的变量加上@符号转义后输出：
     *          标准语法：{{@ 数据 }}
     *          原始语法：<%-数据 %>
     */
    content: '<h1>我是content标题</h1>',   
    users: [{
		name: '张三',
		age: 20,
		sex: '男'
	},{
		name: '李四',
		age: 30,
		sex: '男'
	},{
		name: '玛丽',
		age: 15,
		sex: '女'
	}],
})

console.log(html);


