// 创建用户集合
// 引入mongoose第三方模块
import mongoose from 'mongoose'

if (mongoose.connection && mongoose.connection.readyState === 1) {
  console.log('typeDB 已经连接到数据库')
} else {
	// mongoose.createConnection('mongodb://localhost/NuxtShopCaseDB')
    mongoose.connect('mongodb://localhost/NuxtShopCaseDB')
                        .then(() => console.log('typeDB 数据库NuxtShopCaseDB连接成功'))
                        .catch(() => console.log('typeDB 数据库NuxtShopCaseDB连接失败'));
  console.log('typeDB 尚未连接到数据库')
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
// const sp_type = mongoose.model('sp_type', typeSchema,'sp_type');


var sp_type = mongoose.connection.models['sp_type'];
console.log('已注册的模型：',mongoose.connection.models['sp_type'])
if(mongoose.connection.models['sp_type']){
    sp_type = mongoose.connection.models['sp_type']
    console.log('sp_type model存在')
}else{
    sp_type = mongoose.model('sp_type',typeSchema,'sp_type')
    console.log('新建sp_type:',sp_type)
}


// 将用户集合做为模块成员进行导出
export default sp_type;
export {
	sp_type
}