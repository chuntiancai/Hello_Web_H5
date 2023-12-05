// ===== user 数据库表的逻辑.js ===========

// 创建用户集合
// 引入mongoose第三方模块
import mongoose from 'mongoose'

if (mongoose.connection.readyState === 1) {
  console.log('已经连接到数据库')
} else {
    mongoose.connect('mongodb://localhost/NuxtShopCaseDB')
                        .then(() => console.log('数据库NuxtShopCaseDB连接成功'))
                        .catch(() => console.log('数据库NuxtShopCaseDB连接失败'));
  console.log('尚未连接到数据库')
}

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
	}
});

// 创建集合
const User = mongoose.model('sp_user', userSchema,'sp_user');



// 将用户集合做为模块成员进行导出
export default User;
export {
	User
}