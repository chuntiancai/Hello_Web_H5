/**
 * 1、在浏览器中全局对象是window，在Node中全局对象是global。
 *     Node中全局对象下有以下方法，可以在任何地方使用，global可以省略：
 *          console.log()     在控制台中输出。
            setTimeout()     设置超时定时器。
            clearTimeout()  清除超时时定时器。
            setInterval()      设置间歇定时器。
            clearInterval()   清除间歇定时器。
 * 
 */

global.console.log('我是global对象下面的console.log方法输出的内容');

global.setTimeout(function (){
	console.log('123');
}, 2000)
