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

// admin.get('/article', (req, res) => {
// 	res.render('admin/article')
// });
// admin.get('/article-edit', (req, res) => {
// 	res.render('admin/article-edit')
// });

//处理编辑用户的路由，路由到编辑用户页的渲染。
import user_edit from "./admin/user-editPage.js";
admin.get('/user-edit', user_edit);
// 路由到 创建实现用户添加功能 ，处理post请求
import user_edit_fn from "./admin/user-edit-fn.js";
admin.post('/user-edit', user_edit_fn);


// 处理登录功能，处理登录POST参数
import login from './admin/login.js'
admin.post('/login', login);
// admin.post('/login',async (req,res)=>{
//     console.log('请求参数：',req.body)
//     // 接收请求参数
// 	const {email, password} = req.body;
// 	// 如果用户没有输入邮件地址
// 	if (email.trim().length == 0 || password.trim().length == 0) {
//         return res.status(400).render('admin/error', {msg: '邮件地址或者密码错误'});
//     }
//     // res.status(200).send(req.body)
//     //根据邮箱地址查询用户
//     // let user = await User.findOne({email})
// })


// 处理用户列表路由。
import userPage from "./admin/userPage.js";
admin.get('/user', userPage);

/**
admin.get('/user', (req,res)=>{
    //这个会去到模版根路径下寻找user.art文件，也就是views目录下，因为app.js设置了views为模版的根路径。
    res.render('admin/user')
    // res.send('欢迎来到user页面')
})
 */


// // 实现退出功能
// import logout from './admin/logout'
// admin.get('/logout',logout);

// // 创建用户编辑页面路由
// import userEdit from './admin/user-edit'
// admin.get('/user-edit', userEdit);

// // 创建实现用户添加功能路由
// import userEditFn from './admin/user-edit-fn'
// admin.post('/user-edit', userEditFn);

// // 实现用户信息修改功能
// import userAdd from './admin/user-add'
// admin.post('/user-add', userAdd);

// 将路由对象做为模块成员进行导出
export default admin
// module.exports = admin;