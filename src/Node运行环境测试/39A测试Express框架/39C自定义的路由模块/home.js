/**
 * 1、将当前目录的/index的路由路径导出为home模块，外部可以直接使用home来处理当前目录的/index的路由路径 的router。
 */


const express = require('express');

const home = express.Router();  //路由器

//路由到当前目录的/index 路径
home.get('/index', (req, res) => {
	res.send('欢迎来到博客首页页面')
});

module.exports = home;