//MARK: === 处理 用户编辑页面渲染 逻辑js, 新增用户和编辑用户共用一个页面===

// 导入用户集合构造函数
import { User } from '../../model/userDB.js';

export default async function user_edit(req, res){
	// 获取到地址栏中的id参数，所以结构的变量名，必须和query里的参数名一样？是的，
	// 这里的message参数可以是app的错误处理中间件带过来的。id是user中间件带过来的。
	const { message, id } = req.query;

	// 如果当前传递了id参数
	if (id) {
		// 修改操作
		let user = await User.findOne({_id: id});

		// 渲染用户编辑页面(修改)
		res.render('admin/user-edit', {
			message: message,
			user: user,
			link: '/admin/user-modify?id=' + id,
			button: '修改'
		});

	}else {
		// 否则是 添加操作
		res.render('admin/user-edit', {
			message: message,
			link: '/admin/user-edit',
			button: '添加'
		});
	}

	
}