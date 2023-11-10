// 引入mongoose第三方模块
import mongoose from 'mongoose';
// 连接数据库
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true })
	.then(() => console.log('数据库连接成功'))
	.catch(() => console.log('数据库连接失败'))