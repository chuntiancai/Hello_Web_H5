/**
 * 1、 默认导出 与 默认导入
 *     默认导出语法 export default 默认导出的成员。
 *       注意：每个模块中，只允许使用唯一的一次 export default，否则会报错！
 *     默认导入语法 import 接收名称 from '模块标识符'。
 *
 * 2、 按需导出 与 按需导入
 *     按需导出语法 export let s1 = 10
 *     按需导入语法 import { s1 } from '模块标识符'
 *    1.注意：每个模块中，可以使用多次按需导出
 *    2.默认导出是不包含按需导出的。两者独立，不冲突。
 */

// 当前文件模块为 m1.js
// 定义私有成员 a 和 c
let a = 10
let c = 20
// 外界访问不到变量 d ,因为它没有被暴露出去
let d = 30
function show() {}
// 将本模块中的私有成员暴露出去，供其它模块使用
export default {
 a,
 c,
 show
}
/**
 * 按需导出
 */
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {
  console.log('ooooooooo')
}
