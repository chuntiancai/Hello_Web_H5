//下面两句是为了兼容node.js 14版以下版本，因为require作为COMMONJS的一个命令已不再直接支持使用，所以我们需要导入createRequire命令才可以。
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/**
 * ----- 笔记 --------
 * 1、创建数据库：在MongoDB中不需要显式创建数据库，如果正在使用的数据库不存在，MongoDB会自动创建。
 * 2、创建集合的规则, 使用规则创建集合, 刷新mongodb compass软件，就可以看到你创建的数据库了。
 * 3、与数据库相关的操作，都是异步操作，譬如增删改查。
 */

// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');

//先断开链接
mongoose.disconnect()

// 数据库连接，useNewUrlParser是使用新的url解释器。必须要先启动mongodb的服务器才可以链接仓库。
mongoose.connect('mongodb://localhost/TestMongoDB', { useNewUrlParser: true})
	// 连接成功
	.then(() => console.log('数据库连接成功'))
	// 连接失败
	.catch(err => console.log(err, '数据库连接失败'));


// 创建集合的规则
const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	isPublished: Boolean
});

// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const Course = mongoose.model('Course', courseSchema) // courses

// 创建文档
const course = new Course({
	name: 'node.js基础',
	author: '黑马讲师',
	isPublished: true
});
// 将文档插入到数据库中
course.save();

//创建文档，并且插入数据库的第二种方式：
/**
    //向集合中插入文档
    Course.create({name: 'Javascript', author: '黑马讲师', isPublished: false}, (err, result) => {
        //有回调函数，说明是异步操作。
        console.log(err)
        console.log(result)
    })

    //异步操作，一般都可以用then、catch语句。
    Course.create({name: 'Javascript123', author: '黑马讲师', isPublished: false})
	  .then(result => {
	  	console.log(result)
	  })
      .catch(
        err => console.log(err)
      )

 */