/**
 * 1、打包工具(也是第三方库):
        Gulp：基于node平台开发的前端构建工具(构建工程)。将机械化操作编写成任务, 想要执行机械化操作时执行一个终端命令任务就能自动执行了
            1.使用npm install gulp下载gulp库文件。
            2.在项目根目录下建立gulpfile.js文件。
            3.重构项目的文件夹结构 src目录放置源代码文件 dist目录放置构建后文件。
            4.在gulpfile.js文件中编写任务.。
            5.在命令行工具中执行gulp任务。
            Gulp中提供的方法：
                gulp.src()：获取任务要处理的文件
                gulp.dest()：输出文件
                gulp.task()：建立gulp任务
                gulp.watch()：监控文件的变化

            Gulp插件：gulp-htmlmin ：html文件压缩、gulp-csso ：压缩css、gulp-babel ：JavaScript语法转化、gulp-less: less语法转化
                     gulp-uglify ：压缩混淆JavaScript、gulp-file-include 公共文件包含、browsersync 浏览器实时同步。

    2、Gulp自身的方法非常少，基本上都是通过插件来实现功能。
        所以需要在终端下载gulp需要用到的插件，然后在gulpfile文件中使用插件,然后在终端运行插件。

    3、Gulp的文件目录结构：

 */


/**
 * 一、gulpfile.js文件的编写
 */
// 引用gulp模块
const gulp = require('gulp');   //公共文件包含
const htmlmin = require('gulp-htmlmin');    //html文件压缩
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');  //less语法转化
const csso = require('gulp-csso');  //压缩css
const babel = require('gulp-babel');    //JavaScript语法转化
const uglify = require('gulp-uglify');  //压缩混淆JavaScript
// 使用gulp.task建立任务
// 1.任务的名称
// 2.任务的回调函数
gulp.task('first', () => {
	console.log('我们人生中的第一个gulp任务执行了');
	// 1.使用gulp.src获取要处理的文件
	gulp.src('./src/css/base.css')
		.pipe(gulp.dest('dist/css'));
});

// html任务
// 1.html文件中代码的压缩操作
// 2.抽取html文件中的公共代码
gulp.task('htmlmin', () => {
	gulp.src('./src/*.html')
		.pipe(fileinclude())
		// 压缩html文件中的代码
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist'));
});

// css任务
// 1.less语法转换
// 2.css代码压缩
gulp.task('cssmin', () => {
	// 选择css目录下的所有less文件以及css文件
	gulp.src(['./src/css/*.less', './src/css/*.css'])
		// 将less语法转换为css语法
		.pipe(less())
		// 将css代码进行压缩
		.pipe(csso())
		// 将处理的结果进行输出
		.pipe(gulp.dest('dist/css'))
});

// js任务
// 1.es6代码转换
// 2.代码压缩
gulp.task('jsmin', () => {
	gulp.src('./src/js/*.js')
		.pipe(babel({
			// 它可以判断当前代码的运行环境 将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

// 复制文件夹
gulp.task('copy', () => {

	gulp.src('./src/images/*')
		.pipe(gulp.dest('dist/images'));

	gulp.src('./src/lib/*')
		.pipe(gulp.dest('dist/lib'))
});

// 构建任务
gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'copy']);