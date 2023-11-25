//下面两句是为了兼容node.js 14版以下版本，因为require作为COMMONJS的一个命令已不再直接支持使用，所以我们需要导入createRequire命令才可以。
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const mongoose = require('mongoose');
// 数据库连接 27017是mongodb数据库的默认端口
mongoose.connect('mongodb://localhost/TestMongoDB', { useNewUrlParser: true })
	.then(() => console.log('数据库连接成功'))
	.catch(() => console.log('数据库连接失败'));