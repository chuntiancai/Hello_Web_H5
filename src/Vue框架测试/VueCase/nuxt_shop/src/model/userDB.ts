// ===== user 数据库表的逻辑.js ===========

// 创建用户集合
// 引入mongoose第三方模块
import mongoose from 'mongoose'

// if (mongoose.connection.readyState === 1) {
// 	console.log('userDB 已经连接到数据库')
//   } else {
// 	console.log('userDB 尚未连接到数据库')
// 	mongoose.connect('mongodb://localhost/NuxtShopCaseDB')
// 						  .then(() => console.log('userDB 数据库NuxtShopCaseDB连接成功'))
// 						  .catch(() => console.log('userDB 数据库NuxtShopCaseDB连接失败'));
	
//   }

  
// if (!mongoose.connection) {
// 	mongoose.connect('mongodb://localhost/NuxtShopCaseDB')
// 		.then(() => console.log('userDB 数据库NuxtShopCaseDB连接成功'))
// 		.catch(() => console.log('userDB  数据库NuxtShopCaseDB连接失败'));
// 	console.log('userDB  尚未连接到数据库')

// }


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

var UserModel = mongoose.connection.models['sp_user'];
console.log('已注册的模型：',mongoose.connection.models['sp_user'])
if(mongoose.connection.models['sp_user']){
    UserModel = mongoose.connection.models['sp_user']
    console.log('sp_user model存在')
}else{
    UserModel = mongoose.model('sp_user',userSchema,'sp_user')
    console.log('新建sp_user:',UserModel)
}


export default UserModel
export {
    UserModel
}