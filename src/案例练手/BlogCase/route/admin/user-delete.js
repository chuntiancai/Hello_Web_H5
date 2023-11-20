//MARK: === 处理 删除用户 的数据逻辑.js post请求===

import { User } from '../../model/userDB.js'

export default async function user_delete(req, res){
	// 获取要删除的用户id
	// res.send(req.query.id)
	// 根据id删除用户
	await User.findOneAndDelete({_id: req.query.id});
	// 将页面重定向到用户列表页面
	res.redirect('/admin/user');
}