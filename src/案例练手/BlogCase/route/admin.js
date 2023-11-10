//管理页面的处理逻辑.js

// 引用expess框架
import express from "express";

// 创建博客展示页面路由

const admin = express.Router();

admin.get('/', (req, res) => {
	res.send('欢迎来到管理首页')
});


//测试
admin.get('/user', (req,res)=>{
    //这个会去到模版根路径下寻找user.art文件，也就是views目录下，因为app.js设置了views为模版的根路径。
    res.render('admin/user')
    // res.send('欢迎来到user页面')
})

admin.get('/login', (req, res) => {
	res.render('admin/login')
});
// admin.get('/article', (req, res) => {
// 	res.render('admin/article')
// });
// admin.get('/article-edit', (req, res) => {
// 	res.render('admin/article-edit')
// });
// admin.get('/user-edit', (req, res) => {
// 	res.render('admin/user-edit')
// });


// // 渲染登录页面
// import loginPage from './admin/loginPage'
// admin.get('/login', loginPage);

// // 实现登录功能
// import login from './admin/login'
// admin.post('/login', login);

// // 创建用户列表路由
// import userPage from './admin/userPage'
// admin.get('/user', userPage);

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