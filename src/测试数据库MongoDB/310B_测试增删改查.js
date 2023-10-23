//下面两句是为了兼容node.js 14版以下版本，因为require作为COMMONJS的一个命令已不再直接支持使用，所以我们需要导入createRequire命令才可以。
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');

/**
 * 1、
 * 2、
 */
//先断开链接
mongoose.disconnect()

// 数据库连接，useNewUrlParser是使用新的url解释器。必须要先启动mongodb的服务器才可以链接仓库。
// mongoose.connect('mongodb://localhost/TestMongoDB', { useNewUrlParser: true})
// 	// 连接成功
// 	.then(() => console.log('数据库连接成功'))
// 	// 连接失败
// 	.catch(err => console.log(err, '数据库连接失败'));

