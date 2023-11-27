//下面两句是为了兼容node.js 14版以下版本，因为require作为COMMONJS的一个命令已不再直接支持使用，所以我们需要导入createRequire命令才可以。
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose'); 

/**
 * --- 笔记 ---- 
 * 1、
 * 2、
 */
//先断开链接
mongoose.disconnect()

// 数据库连接，useNewUrlParser是使用新的url解释器。必须要先启动mongodb的服务器才可以链接仓库。
mongoose.connect('mongodb://localhost/TestMongoDB', { useNewUrlParser: true})
	// 连接成功
	.then(() => console.log('数据库连接成功'))
	// 连接失败
	.catch(err => console.log(err, '数据库连接失败'));

// 创建集合的规则
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	password: String,
	hobbies: [String]
});

// 使用规则创建集合，用户集合
const User = mongoose.model('User', userSchema);


/**
 * 一、增加、插入
 */
//异步操作，一般都可以用then、catch语句。
// User.create({name: '大菜', age: '18', email: '123456@123.com',password:654321,hobbies:['吃','喝','玩']})
// .then(result => {
//     console.log('插入成功：',result)
// })
// .catch(
//   err => console.log('插入错误：',err)
// )


/**
 * 二、查询
 */

// 查询用户集合中的所有文档
// User.find().then(result => console.log(result));
// 通过_id字段查找文档
// User.find({_id: '5c09f267aeb04b22f8460968'}).then(result => console.log(result))

// findOne方法返回一条文档 默认返回当前集合中的第一条文档
// User.findOne({name: '李四'}).then(result => console.log(result))

// 查询用户集合中年龄字段大于20并且小于40的文档
// User.find({age: {$gt: 20, $lt: 40}}).then(result => console.log(result))

// 查询用户集合中hobbies字段值包含足球的文档
// User.find({hobbies: {$in: ['足球']}}).then(result => console.log(result))
// 选择要查询的字段
// User.find().select('name email -_id').then(result => console.log(result))
// 根据年龄字段进行升序排列
// User.find().sort('age').then(result => console.log(result))
// 根据年龄字段进行降序排列
// User.find().sort('-age').then(result => console.log(result))
// 查询文档跳过前两条结果 限制显示3条结果
// User.find().skip(2).limit(3).then(result => console.log(result))


/**
 * 三、删除
 */
// 查找到一条文档并且删除，返回删除的文档，如何查询条件匹配了多个文档 那么将会删除第一个匹配的文档。
// User.findOneAndDelete({_id: '5c09f267aeb04b22f8460968'}).then(result => console.log('删除了的文档：',result))
// 删除多条文档,传空参数，则会删除全部
// User.deleteMany({}).then(result => console.log(result))

/**
 * 四、更新、修改
 */
// 找到要删除的文档并且删除，返回是否删除成功的对象，如果匹配了多条文档, 只会删除匹配成功的第一条文档
// User.updateOne({name: '李四'}, {age: 120, name: '李狗蛋'}).then(result => console.log(result))
// 找到要删除的文档并且删除
// User.updateMany({}, {age: 300}).then(result => console.log(result))



/**
 * 五、验证字段是否可插入
 * 
 *  required: true 必传字段
 *	minlength：3 字符串最小长度
 *	maxlength: 20 字符串最大长度
 *	min: 2 数值最小为2
 *	max: 100 数值最大为100
 *	enum: ['html', 'css', 'javascript', 'node.js']
 *	trim: true 去除字符串两边的空格
 *	validate: 自定义验证器
 *	default: 默认值
 *
 */
// console.log("======验证字段是否可插入=======")
// const postSchema = new mongoose.Schema({
// 	title: {
// 		type: String,
// 		// 必选字段
// 		required: [true, '请传入文章标题'],
// 		// 字符串的最小长度
// 		minlength: [2, '文章长度不能小于2'],
// 		// 字符串的最大长度
// 		maxlength: [5, '文章长度最大不能超过5'],
// 		// 去除字符串两边的空格
// 		trim: true
// 	},
// 	age: {
// 		type: Number,
// 		// 数字的最小范围
// 		min: 18,
// 		// 数字的最大范围
// 		max: 100
// 	},
// 	publishDate: {
// 		type: Date,
// 		// 默认值
// 		default: Date.now
// 	},
// 	category: {
// 		type: String,
// 		// 枚举 列举出当前字段可以拥有的值
// 		enum: {
// 			values: ['html', 'css', 'javascript', 'node.js'],
// 			message: 'category 分类名称要在一定的范围内才可以'
// 		}
// 	},
// 	author: {
// 		type: String,
// 		validate: {
// 			validator: v => {
// 				// 返回布尔值
// 				// true 验证成功
// 				// false 验证失败
// 				// v 要验证的值
// 				return v && v.length > 4
// 			},
// 			// 自定义错误信息
// 			message: 'author 传入的值不符合验证规则'
// 		}
// 	}
// });
// //文章集合
// const Post = mongoose.model('Post', postSchema);

// Post.create({title:'aa', age: 60, category: 'java', author: 'bd'})
// 	.then(result => console.log('验证插入数据成功：' + result))
// 	.catch(error => {
// 		// 获取错误信息对象
// 		const err = error.errors;
// 		// 循环错误信息对象
// 		for (var attr in err) {
// 			// 将错误信息打印到控制台中
// 			console.log('验证插入数据错误信息：' + err[attr]['message']);
// 		}
// 	})


/**
 * 六、集合关联
 * 1、通常不同集合的数据之间是有关系的，例如文章信息和用户信息存储在不同集合中，但文章是某个用户发表的，
 * 	  要查询文章的所有信息包括发表用户，就需要用到集合关联。
 * 2、使用id对集合进行关联。
 *	  使用populate方法进行关联集合查询。
 *
 * 
 */
 // 文章集合
const PostUion = mongoose.model('Post', new mongoose.Schema({
    title: { type: String },
    // 使用ID将文章集合和作者集合进行关联
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}));
//联合查询
PostUion.find()
      .populate('author')
      .then((err, result) => console.log('联合查询结果：' + result));

