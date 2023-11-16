//MARK: === 处理用户编辑页面的post请求逻辑js ===
// 引入用户集合的构造函数

import { User, validateUser } from '../../model/user.js'

export default async function user_edit_fn(req, res, next){

    console.log("user_edit_fn验证编辑用户的post请求的参数")
	try {
        console.log('reqbody的类型：',typeof req.body)
        console.log('reqbody的内容：',req.body)
		validateUser(req.body)   //把验证对象属性的方法放到user模块中。
	}catch (e) {
        console.log(`验证没通过：${e}`)
		// 验证没有通过
		// e.message
		// 重定向回用户添加页面
		// return res.redirect(`/admin/user-edit?message=${e.message}`);
		// JSON.stringify() 将对象数据类型转换为字符串数据类型
        // 这里会被app.js中配置的方法拦截，app.js中配置通过use方法配置了错误拦截请求。
		return next(JSON.stringify({path: '/admin/user-edit', message: e.message}))
	}
    console.log(`验证通过了～`)

	// 根据邮箱地址查询用户是否存在
	let user = await User.findOne({email: req.body.email});
	// 如果用户已经存在 邮箱地址已经被别人占用
	if (user) {
		// 重定向回用户添加页面
		// return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`);
		return next(JSON.stringify({path: '/admin/user-edit', message: '邮箱地址已经被占用'}))
	}
	
	// 将用户信息添加到数据库中
	await User.create(req.body);
	// 将页面重定向到用户列表页面
	res.redirect('/admin/user');
}