// 创建用户集合
// 引入mongoose第三方模块
import mongoose from 'mongoose'

// 创建用户集合规则
const userSchema = new mongoose.Schema({
	username: {
		type: String,
	},
	user_email: {
		type: String,
	},
	password: {
		type: String,
	},
	user_xueli: {
		type: String,
	},
	user_id: {
		type: Number,
	},
	user_sessiontoken: {
		type: String,
	}
});
// 创建集合,如果后面不指定为sp_user，那么mongo数据库里面的表名默认加s，变成sp_users

const User =  mongoose.model('sp_user',userSchema,'sp_user')
export default User