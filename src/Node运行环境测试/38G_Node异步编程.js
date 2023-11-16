/**
 * 1、异步函数一般，通过传入闭包(回调函数)作为参数，来获取(处理)异步执行的结果。
 * 2、JS的代码执行分三个区，同步执行区，异步执行区，回调函数队列。
 *      从同步执行区调入到异步执行区，然后从异步执行区调用到回调函数队列，然后从回调函数队列调入到同步执行区执行。
 * 3、Promise出现的目的是为了解决Node.js异步编程中回调地狱的问题，也就是多层嵌套调用的问题。是异步编程语法上的改进，并不是新的功能，封装成一个对象。
 *      可以理解为一个对象封装了异步执行的结果，但是该对象也需要异步地去使用，调用Promise对象的then实例方法、catch实例方法。
 * 
 * 4、异步函数，其实是语法关键字，async关键字、wait关键字。
 */
/**
 * 一、异步编程的基本使用
 */

function getMsg (callback) {
    console.log('这里是getMsg函数')
	setTimeout(function () {
        console.log('这里是setTimeout两秒后执行的闭包函数')
		callback({
			msg: 'hello node.js'
		})
	}, 2000)
}

//匿名函数function (data)作为闭包传进去
getMsg(function (data) {
	console.log('这里是callback参数匿名函数闭包：',data);
});

/**
 * 二、Promise的使用。
 *  1、promise的then方法：参数接受Promise构造函数的resolve方法。
 *     promise的catch方法：参数接受Promise构造函数的reject方法。
 * 
 *  2、promise的then或者catch方法，如果没有自定义返回，那么返回的对象仍然是promise对象本身。
 */

const fs = require('fs');

let promise = new Promise((resolve, reject) => {

	fs.readFile('./38A_HelloNode.js', 'utf8', (err, result) => {

		if (err != null) {
            //catch方法接收
			reject(err);
		}else {
            //then方法接收
			resolve(result);
		}

	});

});

promise.then((result) => {
	 console.log('读取成功：' ,result);
})
.catch((err)=> {
	console.log('读取失败：' ,err);
})

/**
 * 三、async异步函数的使用。
 *   1.在普通函数定义的前面加上async关键字 普通函数就变成了异步函数。
     2.异步函数默认的返回值是promise对象。
     3.在异步函数内部使用throw关键字进行错误的抛出。  

    await关键字：
     1.它只能出现在异步函数中，阻塞当前所在线程，也就是阻塞当前async的线程。不能用在主线程中，因为不能用来阻塞主线程。
     2.await promise 它可以暂停异步函数的执行 等待promise对象返回结果后再向下执行函数

    throw关键字：
     1.也就是throw-catch组合语法。catch是在函数外面进行捕获异常。
	 2.try-catch语句,try catch 可以捕获异步函数以及其他同步代码在执行过程中发生的错误，但是不能其他类型的API发生的错误。
 */

//测试throw关键字
async function testThrow (isthow) {
    if (isthow == true) {
        throw '发生了一些错误';//thow之后的代码不再执行
    }else{
        return '没有异常发生';
    }
}
testThrow(false).then(function (data) {
	console.log('测试thorw，没有异常抛出：',data);
}).catch(function (err){
	console.log('测试trow，抛出了异常：',err);
})

//测试wait关键字
async function p1 () {
    console.log('执行p1')
	return '返回p1';
}

async function p2 () {
    console.log('执行p2')
	return '返回p2';
}

async function p3 () {
    console.log('执行p3')
	return '返回p3';
}

async function testWiat () {
    let r2 = await p2()
	let r1 = await p1()
	let r3 = await p3()
	console.log(r1,r2,r3)
}

//try catch 可以捕获异步函数以及其他同步代码在执行过程中发生的错误，但是不能其他类型的API发生的错误。例如回调函数和promise对象。
function testTyyCatch(){
	try {
		throw "try-catch抛出的错误"
	} catch (error) {
		console.log(error)
	}
	
}

testWiat();
testTyyCatch()
console.log('testWiat方法之后的代码～')
