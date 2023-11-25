//MARK: === 第三方框架joi，用于验证对象的属性格式是否符合要求，这里是个例子 ===
// 引入joi模块
import Joi from "joi";

// 定义对象的验证规则
const schema = Joi.object({
	username: Joi.string().min(2).max(5).required().error(new Error('username属性没有通过验证')),
	birth: Joi.number().min(1900).max(2020).error(new Error('birth没有通过验证'))
});

function run () {
	let data = {username: 'aa', birth: 1800}
	// 实施验证
	const result = schema.validate(data);

	if (result.error) {
		console.log('验证不通过');
		console.error(result.error.message);
		throw result.error
	  } else {
		console.log('验证通过');
	  }

}
try {
	run();
} catch (error) {
	console.log(`run方法中的错误: ${error.message}`)
}
