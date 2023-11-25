
## 项目的开始步骤：
    以创建列表隔行变色项目为例子：
    ① 新建项目空白目录，并运行 npm init -y 命令，然后就会自动生成初始化包管理配置文件 package.json
    ② 新建 src 源代码目录
    ③ 新建 src -> index.html 首页
    ④ 初始化首页基本的结构
    ⑤ 运行 npm install jquery –S 命令，安装 jQuery
    ⑥ 通过模块化的形式，实现列表隔行变色效果。也是通过es6的import语法，引入自定义的js文件作为包，去渲染刚刚写的index.html页面。

## webpack的使用步骤：
    在项目中安装和配置 webpack：
    ① 运行 npm install webpack webpack-cli –D 命令，安装 webpack 相关的包
    ② 在项目根目录中(不是scr)，手动创建名为 webpack.config.js 的 webpack 配置文件
    ③ 在 webpack 的配置文件中，初始化如下基本配置：
        module.exports = {
            mode: 'development' // mode 用来指定构建模式,是开发环境还是生产环境，需不需要压缩代码。“production”
        }
    ④ 在 package.json 配置文件中的 scripts 节点下，新增 dev 脚本如下：
        "scripts": {
            "dev": "webpack" // script 节点下的脚本，这样就可以通过 npm run 执行 webpack（名字为dev）脚本了。
        }
    ⑤ 在终端中运行 npm run dev 命令，启动 webpack 进行项目打包，然后就会自动在根目录下生成了dist文件夹。
        打包机会去编译解析src文件夹下的所有js文件。
        dist文件夹下是已经构建好的包文件，已经经过混淆，压缩，兼容处理了之后的js等包文件，有一个main.js文件。
        改main.js文件，就是打包了当前项目下所有的js文件的大一统js文件，使用的话，直接用这个main.js文件就可以了。

    ⑥ 注意点：
    webpack 的 4.x 版本中默认约定：
         打包的入口文件为 src -> index.js
         打包的输出文件为 dist -> main.js
        如果要自己指定打包出入口文件，可以在 webpack.config.js 中新增如下配置信息：
            const path = require('path') // 导入 node.js 中专门操作路径的模块
            module.exports = {
                entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
                output: {
                   path: path.join(__dirname, './dist'), // 输出文件的存放路径
                   filename: 'bundle.js' // 输出文件的名称
                } 
            }


## 配置webpack的自动化打包步骤：

    ① 运行 npm install webpack-dev-server –D 命令，安装支持项目自动打包的工具。也就是webpack的另外一个脚本。
    ② 修改 package.json -> scripts 中的 dev 命令如下：
        "scripts": {
            "dev": "webpack-dev-server" // script 节点下的脚本，可以通过 npm run 执行
            //或者： --open 打包完成后自动打开浏览器页面； --host 配置 IP 地址； --port 配置端口
            "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8888"
        }
        自动打开也可以在webpack.config.js中添加如下节点：
        devServer: {
            open: true,//初次打包完成后,自动打开浏览器
            host: '127.0.0.1',// 实时打包所使用的主机地址
            port: 8080,// 实时打包所使用的端口号
            static:'./' //静态资源，能够在http协议上打开相当于是app.use(express.static('./'))
        }
    ③ 将 src -> index.html 中，script 脚本的引用路径，修改为 "/buldle.js“
    ④ 运行 npm run dev 命令，重新进行打包
    ⑤ 在浏览器中访问 http://localhost:8080 地址，查看自动打包效果
    注意：
         webpack-dev-server 会启动一个实时打包的 http 服务器
         webpack-dev-server 打包生成的输出文件，默认放到了项目根目录中，而且是虚拟的、看不见的
        
## 配置webpack的生成预览页面步骤：
    使用html-webpack-plugin插件。
    ① 运行 npm install html-webpack-plugin –D 命令，安装生成预览页面的插件
    ② 修改 webpack.config.js 文件头部区域，添加如下配置信息：
        // 导入生成预览页面的插件，得到一个构造函数
        const HtmlWebpackPlugin = require('html-webpack-plugin')
        const htmlPlugin = new HtmlWebpackPlugin({   // 创建插件的实例对象
            template: './src/index.html',   // 指定要用到的模板文件
            filename: 'index.html'      // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示
        })
    ③ 修改 webpack.config.js 文件中向外暴露的配置对象，新增如下配置节点：
        module.exports = {
            plugins: [ htmlPlugin ] // plugins 数组是 webpack 打包期间会用到的一些插件列表
        }