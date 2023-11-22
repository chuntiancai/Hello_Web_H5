
## webpack简介
    webpack 是一个流行的前端项目构建工具（打包工具），可以解决当前 web 开发中所面临的困境。
    webpack 提供了友好的模块化支持，以及代码压缩混淆、处理 js 兼容问题、性能优化等强大的功能，从而让程序员把工作的重心放到具体的功能实现上，提高了开发效率和项目的可维护性。
    webpack实现代码混淆功能，解决js的兼容性，也就是把旧js文件 混淆成兼容性 的新js文件。
    目前绝大多数企业中的前端项目，都是基于 webpack 进行打包构建的。

## webpack的基本使用
    以列表隔行变色项目为例子：在webpackCase目录中。
    
### 1.创建列表隔行变色项目
    ① 新建项目空白目录，并运行 npm init –y 命令，初始化包管理配置文件 package.json
    ② 新建 src 源代码目录
    ③ 新建 src -> index.html 首页
    ④ 初始化首页基本的结构
    ⑤ 运行 npm install jquery –S 命令，安装 jQuery
    ⑥ 通过模块化的形式，实现列表隔行变色效果

### 2. 在项目中安装和配置 webpack
    ① 运行 npm install webpack webpack-cli –D 命令，安装 webpack 相关的包
    ② 在项目根目录中，创建名为 webpack.config.js 的 webpack 配置文件
    ③ 在 webpack 的配置文件中，初始化如下基本配置：
        module.exports = {
            mode: 'development' // mode 用来指定构建模式，也有production模式
        }
    ④ 在 package.json 配置文件中的 scripts 节点下，新增 dev 脚本如下：
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",  //这句是测试代码
            "dev": "webpack" // script 节点下的脚本，可以通过 npm run 执行
        }
    ⑤ 在终端中运行 npm run dev 命令，启动 webpack 进行项目打包。

### 3. 配置打包的入口与出口
    webpack 的 4.x 版本中默认约定：
         打包的入口文件为 src -> index.js
         打包的输出文件为 dist -> main.js
    如果要修改打包的入口与出口，可以在 webpack.config.js 中新增如下配置信息：
        const path = require('path') // 导入 node.js 中专门操作路径的模块
        module.exports = {
         entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
         output: {
            path: path.join(__dirname, './dist'), // 输出文件的存放路径
            filename: 'bundle.js' // 输出文件的名称
         }
        }

### 4. 配置 webpack 的自动打包功能
    就是修改代码之后，可以一键实时打包，会一直监听代码有没有修改，修改了就自动重新打包，不用在终端输入一系列的指令来打包。
    ① 运行 npm install webpack-dev-server –D 命令，安装支持项目自动打包的工具
    ② 修改 package.json -> scripts 中的 dev 命令如下：
        "scripts": {
         "dev": "webpack-dev-server" // script 节点下的脚本，可以通过 npm run 执行
        }
    ③ 将 src -> index.html 中，script 脚本的引用路径，修改为 "/buldle.js“，原来默认是main.js,你在第三步修改为buldle.js了。不用再使用../../main.js这些实际路径了，而是用配置后的路径/buldle.js(根目录下，已隐藏)。
    ④ 运行 npm run dev 命令，重新进行打包
    ⑤ 在浏览器中访问 http://localhost:8080 地址，查看自动打包效果
        默认是该脚本是运行在http://localhost:8080端口，也就是开启了这个端口的服务，访问该端口，就可以访问不断自动打包的buldle.js了。
    
    注意：
         webpack-dev-server 会启动一个实时打包的 http 服务器
         webpack-dev-server 打包生成的输出文件，默认放到了项目根目录中，而且是虚拟的、看不见的

### 5. 配置 html-webpack-plugin 生成预览页面
    ① 运行 npm install html-webpack-plugin –D 命令，安装生成预览页面的插件。
    ② 修改 webpack.config.js 文件头部区域，添加如下配置信息：
        // 导入生成预览页面的插件，得到一个构造函数
        const HtmlWebpackPlugin = require('html-webpack-plugin')
        const htmlPlugin = new HtmlWebpackPlugin({ // 创建插件的实例对象
         template: './src/index.html', // 指定要用到的模板文件
         filename: 'index.html' // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示
        }) 
    ③ 修改 webpack.config.js 文件中向外暴露的配置对象，新增如下配置节点：
        module.exports = {
         plugins: [ htmlPlugin ] // plugins 数组是 webpack 打包期间会用到的一些插件列表
        }

### 6. 配置自动打包相关的参数
    // package.json中的配置
    // --open 打包完成后自动打开浏览器页面
    // --host 配置 IP 地址
    // --port 配置端口
    "scripts": {
    "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8888"
    },


##  webpack 中的加载器
    在实际开发过程中，webpack 默认只能打包处理以 .js 后缀名结尾的模块，其他非 .js 后缀名结尾的模块，webpack 默认处理不了，需要调用 loader 加载器才可以正常打包，否则会报错！
    通过 loader 打包非 js 模块：
        loader 加载器可以协助 webpack 打包处理特定的文件模块，比如：
             less-loader 可以打包处理 .less 相关的文件
             sass-loader 可以打包处理 .scss 相关的文件
             url-loader 可以打包处理 css 中与 url 路径相关的文件

        loader 的调用过程： 一层一层地去寻找loader处理器来打包响应的模块。

### loader的基本使用
### 1. 打包处理 css 文件
    ① 运行 npm i style-loader css-loader -D 命令，安装处理 css 文件的 loader
    ② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：
        // 所有第三方文件模块的匹配规则
        module: {
            rules: [
                { test: /\.css$/, use: ['style-loader', 'css-loader'] }
            ]
        }
        其中，test 表示匹配的文件类型， use 表示对应要调用的 loader
        注意：  use 数组中指定的 loader 顺序是固定的
               多个 loader 的调用顺序是：从后往前调用

### 2. 打包处理 less 文件
    less和scss都是样式的预编译语言。
    ① 运行 npm i less-loader less -D 命令
    ② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：
     // 所有第三方文件模块的匹配规则
     module: {
        rules: [
           { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
        ]
     }

### 3. 打包处理 scss 文件
    ① 运行 npm i sass-loader node-sass -D 命令
    ② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：
     // 所有第三方文件模块的匹配规则
     module: {
        rules: [
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
     }

### 4. 配置 postCSS 自动添加 css 的兼容前缀
    兼容老IE浏览器。
    ① 运行 npm i postcss-loader autoprefixer -D 命令
    ② 在项目根目录中创建 postcss 的配置文件 postcss.config.js，并初始化如下配置：
        const autoprefixer = require('autoprefixer') // 导入自动添加前缀的插件
        module.exports = {
            plugins: [ autoprefixer ] // 挂载插件
        }
    ③ 在 webpack.config.js 的 module -> rules 数组中，修改 css 的 loader 规则如下：
     module: {
        rules: [
            { test:/\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] }
        ]
     }

### 5.配置资源文件的路径，即打包样式表中的图片和字体文件
    webpack默认是不能识别资源文件的路径和资源类型的，需要引入加载器处理。
    ① 运行 npm i url-loader file-loader -D 命令
    ② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：
        module: {
            rules: [
                { 
                    test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, 
                    use: 'url-loader?limit=16940'
                }
            ]
        }
        其中 ? 之后的是 loader 的参数项。url-loader内置依赖file-loader。
        limit 用来指定图片的大小，单位是字节(byte),只有小于 limit 大小的图片，才会被转为 base64 图片

### 6. 打包处理 js 文件中的高级语法
    ① 安装babel转换器相关的包：npm i babel-loader @babel/core @babel/runtime -D 
    ② 安装babel语法插件相关的包：npm i  @babel/preset-env @babel/plugin-transformruntime @babel/plugin-proposal-class-properties –D 
    ③ 在项目根目录  中，创建 babel 配置文件 babel.config.js 并初始化基本配置如下：
        module.exports = {
            presets: [ '@babel/preset-env' ],
            plugins: [ '@babel/plugin-transform-runtime', '@babel/plugin-proposalclass-properties’ ]
        }
    ④ 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：
        // exclude 为排除项，表示 babel-loader 不需要处理 node_modules 中的 js 文件
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }


## webpack 中配置 vue 组件的加载器
    ① 运行 npm i vue-loader vue-template-compiler -D 命令   //这是依赖项
    ② 在 webpack.config.js 配置文件中，添加 vue-loader 的配置项如下：
    const VueLoaderPlugin = require('vue-loader/lib/plugin')    //插件
    module.exports = {
        module: {
            rules: [
                    // ... 其它规则
                    { test: /\.vue$/, loader: 'vue-loader' }
                ]
        },
        plugins: [
            // ... 其它插件
            new VueLoaderPlugin() // 请确保引入这个插件！
        ] 
    }

### 在 webpack 项目中使用 vue
    ① 运行 npm i vue –S 安装 vue
    ② 在 src -> index.js 入口文件中，通过 import Vue from 'vue' 来导入 vue 构造函数
    ③ 创建 vue 的实例对象，并指定要控制的 el 区域
    ④ 通过 render 函数渲染 App 根组件
        // 1. 导入 Vue 构造函数
        import Vue from 'vue'
        // 2. 导入 App 根组件
        import App from './components/App.vue'

        const vm = new Vue({
            // 3. 指定 vm 实例要控制的页面区域
            el: '#app',
            // 4. 通过 render 函数，把指定的组件渲染到 el 区域中
            render: h => h(App)
        })

##  webpack 打包发布
    上线之前需要通过webpack将应用进行整体打包，可以通过 package.json 文件配置打包命令：
        // 在package.json文件中配置 webpack 打包命令
        // 该命令默认加载项目根目录中的 webpack.config.js 配置文件
        "scripts": {
        // 用于打包的命令
        "build": "webpack -p",
        // 用于开发调试的命令
        "dev": "webpack-dev-server --open --host 127.0.0.1 --port 3000",
        },

    打包之后，会在dist文件夹下生成index.html和bundle.js文件，bundle.js文件就是webpack根据你的配置，拿源代码那些js文件
    打包构建成的集合js文件。然后叫后台人员把dist文件夹发布到服务器上，用户就可以去访问网页了。
