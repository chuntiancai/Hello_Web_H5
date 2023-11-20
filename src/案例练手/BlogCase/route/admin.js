//MARK: -- 管理页面的逻辑逻辑.js 处理路由 ----

// 引用expess框架
import express from "express";

//导入数据库的集合规则,User集合规则
// import User from '../model/user.js'

// 创建博客展示页面路由

const admin = express.Router();

admin.get('/', (req, res) => {
	res.send('欢迎来到管理首页')
});

//处理登录页面的路由，路由到登录页的渲染。
import loginPage from "./admin/loginPage.js";
admin.get('/login', loginPage);

// post,处理 登录功能 的路由
import login from './admin/login.js'
admin.post('/login', login);

// 处理用户列表路由。
import userPage from "./admin/userPage.js";
admin.get('/user', userPage);


//处理 编辑用户 的路由，路由到编辑用户页的渲染。
import user_edit from "./admin/user-editPage.js";
admin.get('/user-edit', user_edit);

// post，处理 添加用户的功能 的路由
import user_edit_fn from "./admin/user-edit-fn.js";
admin.post('/user-edit', user_edit_fn);

//post， 处理 修改用户信息 的路由
import user_modify from "./admin/user-modify.js";
admin.post('/user-modify', user_modify);


// 处理 删除用户 的逻辑
import user_delete from "./admin/user-delete.js";
admin.get('/delete',user_delete);


// 文章列表页面 的路由
import article from "./admin/articlePage.js";
admin.get('/article', article);

// 文章编辑页面 的路由
import article_edit from "./admin/article-editPage.js";
admin.get('/article-edit', article_edit);

// 处理 添加文章功能 的逻辑
import article_add from "./admin/article-add.js";
admin.post('/article-add', article_add)


// 将路由对象做为模块成员进行导出
export default admin
// module.exports = admin;