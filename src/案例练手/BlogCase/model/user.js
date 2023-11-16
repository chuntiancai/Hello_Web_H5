// ===== user 数据库表的逻辑.js ===========

// 创建用户集合
// 引入mongoose第三方模块
import mongoose from 'mongoose'

// 引入joi模块，验证对象的属性的值是否符合格式
import Joi from 'joi'

// 创建用户集合规则
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 20
	},
	email: {
		type: String,
		// 保证邮箱地址在插入数据库时不重复
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	// admin 超级管理员
	// normal 普通用户
	role: {
		type: String,
		required: true
	},
	// 0 启用状态
	// 1 禁用状态
	state: {
		type: Number,
		default: 0
	}
});

// 创建集合
const User = mongoose.model('User', userSchema);

/**
async function createUser () {
	console.log('创建user数据库表了')
	const pass = '123456'
	const user = await User.create({
		username: 'mathew',
		email: 'mathew@123.com',
		password: pass,
		role: 'admin',
		state: 0
	});
}

// createUser(); 
 */


// 验证用户信息
function validateUser(user){

	console.log('validateUser开始验证对象了：',user)
	// 定义对象的验证规则
	const schema = Joi.object({
		username: Joi.string().min(2).max(20).required().error(new Error('用户名不符合验证规则')),
		email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
		password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
		role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
		state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
	});
	// 实施验证
	const result = schema.validate(user);
	if (result.error){
		console.log('校验抛错：',result)
		throw result.error
	}else{
		console.log('joi验证通过了')
		return result
	}

}

// 将用户集合做为模块成员进行导出
export default User;
export {
	User,
	validateUser
}
// export default {
// 	User,
// 	validateUser
// }