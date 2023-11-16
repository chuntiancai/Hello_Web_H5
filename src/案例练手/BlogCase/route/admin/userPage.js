//MARK: === 处理用户页面的渲染逻辑js ===

// 导入用户集合构造函数
import { User } from '../../model/user.js';

// 用了async关键字，也就是函数里面的await关键字可以阻塞当前async线程。
export default async function userPage(req, res){
	// 接收客户端传递过来的当前页参数
	let page = req.query.page || 1;
	// 每一页显示的数据条数
	let pagesize = 10;
	// 查询用户数据的总数
	let count = await User.countDocuments({});
	// 总页数
	let total = Math.ceil(count / pagesize);

	// 页码对应的数据查询开始位置
	let start = (page - 1) * pagesize; 

	// 将用户信息从数据库中查询出来
	let users = await User.find({}).limit(pagesize).skip(start)
	
	// 渲染用户列表模块，这里渲染的路径时相对于在app中设置的views路径，存放art文件的。
	res.render('admin/user', {
		users: users,
		page: page,
		total: total
	});
}
