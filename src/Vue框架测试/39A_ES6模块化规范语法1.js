/**
 * 一、测试导入模块，并使用他人模块中的变量和函数。
 *  1、直接导入模块的话，相当直接执行js文件(他人模块)中的代码。
 */

// 导入模块成员
import m1 from './39A_ES6模块化规范语法.js'
import { s1, s2 as ss2, say } from './39A_ES6模块化规范语法.js'
// 默认导入和按需导入同时存在
// import m1, { s1, s2 as ss2, say } from './m1.js'

console.log(m1)
// 打印输出的结果为：
// { a: 10, c: 20, show: [Function: show] }

console.log(ss2)