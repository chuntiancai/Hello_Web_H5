const path = require('path') // 导入 node.js 中专门操作路径的模块
module.exports = {
    mode: 'development', // mode 用来指定构建模式,开发环境，还是生产环境，需不需要压缩代码。
    entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
    output: {
       path: path.join(__dirname, './dist'), // 输出文件的存放路径
       filename: 'bundle.js' // 输出文件的名称
    } ,
    //需要配置服务器地址，不然不知道为啥不能访问，直接当作get请求处理了。
    devServer: {
        open: true,//初次打包完成后,自动打开浏览器
        host: '127.0.0.1',// 实时打包所使用的主机地址
        port: 8080,// 实时打包所使用的端口号
        static:'./' //静态资源，能够在http协议上打开相当于是app.use(express.static('./'))
    }
}