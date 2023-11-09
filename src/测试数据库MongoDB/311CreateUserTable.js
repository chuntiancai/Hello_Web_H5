//下面两句是为了兼容node.js 14版以下版本，因为require作为COMMONJS的一个命令已不再直接支持使用，所以我们需要导入createRequire命令才可以。
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const mongoose = require('mongoose');
// 创建用户集合规则
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 20
	},
	age: {
		type: Number,
		min: 18,
		max: 80
	},
	password: String,
	email: String,
	hobbies: [ String ]
});

// 创建集合 返回集合构造函数
export const User = mongoose.model('User', userSchema);

// module.exports = User;	//兼容ES语法，不能使用module.exports