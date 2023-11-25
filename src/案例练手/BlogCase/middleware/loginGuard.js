const guard = (req, res, next) => {
	console.log('经过了loginGuard文件了:',req.url,"; 会话名：",req.session.username)
	// 判断用户访问的是否是登录页面
	// 判断用户的登录状态
	// 如果用户是登录的 将请求放行
	if (req.url != '/login' && !req.session.username) {
		console.log('loginGuard: 如果用户不是登录的 将请求重定向到登录页面')
		// 如果用户不是登录的 将请求重定向到登录页面
		res.redirect('/admin/login');
	} else {
		// 用户是登录状态 将请求放行
		next();
	}
}

export default guard;