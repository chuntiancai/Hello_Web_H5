//主页处理逻辑.js

// 引用expess框架
import express from "express";

// 创建博客展示页面路由
const home = express.Router();

home.get('/', (req, res) => {
	res.send('欢迎来到博客首页')
});


export default home;

// // 将路由对象做为模块成员进行导出
// module.exports = home;