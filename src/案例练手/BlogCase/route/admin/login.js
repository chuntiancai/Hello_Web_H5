//MARK: -- 处理登录的路由逻辑.js -----

// 导入用户集合构造函数
import { User } from '../../model/user.js'

export default async (req, res) => {
    console.log('处理login的post请求')
	// 接收请求参数
	const {email, password} = req.body;
	// 如果用户没有输入邮件地址
	// if (email.trim().length == 0 || password.trim().length == 0) return res.status(400).send('<h4>邮件地址或者密码错误</h4>');
	if (email.trim().length == 0 || password.trim().length == 0){
        return res.status(400).render('admin/error', {msg: '邮件地址或者密码错误'});
    } 
    /**
        根据邮箱地址查询用户信息
	    如果查询到了用户 user变量的值是对象类型 对象中存储的是用户信息
	    如果没有查询到用户 user变量为空
     */
	
	let user = await User.findOne({email});
	// 查询到了用户
	if (user) {
		// 将客户端传递过来的密码和用户信息中的密码进行比对
		// true 比对成功
		// false 对比失败
		let isValid = password == user.password ? true : false
		// 如果密码比对成功
		if ( isValid ) {
			// 登录成功
			// 将用户名存储在请求对象中
			req.session.username = user.username;
			// res.send('登录成功');
			req.app.locals.userInfo = user;
			// 重定向到用户列表页面
			res.redirect('/admin/user');
		} else {
			// 没有查询到用户
			res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'})
		}
	} else {
		// 没有查询到用户
		res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'})
	}
}