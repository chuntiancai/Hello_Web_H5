/**
 * 1、将/index的路由路径导出为admin模块，外部可以直接使用admin来处理/index的路由路径 的router。
 */

const express = require('express');

const admin = express.Router();

admin.get('/index', (req, res) => {
	res.send('欢迎来到博客管理页面')
});

module.exports = admin;