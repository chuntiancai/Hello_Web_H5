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
const typeSchema = new mongoose.Schema({
	type_id: {
		type: Number,
	},
	type_name: {
		type: String,
	}
});

// 创建集合,第三个参数是数据库里真正的表名，默认情况下，mongoose会把存在数据库里的表名字加多一个s，所以需要强制指定表名。
const sp_type = mongoose.model('sp_type', typeSchema,'sp_type');



// 将用户集合做为模块成员进行导出
export default sp_type;
export {
	sp_type
}