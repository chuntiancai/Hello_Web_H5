
## 这是一个后台管理系统，不是用户webApp
    注意：已丢弃
    1、这个案例是基于vue cli脚手架搭建的项目，但是现在vue已经不使用这个脚手架了，而是新推出vite脚手架。
    2、但是我打算用nuxt脚手架来搭建。
## 项目目录结构：
    用 vue-cli 4 创建的 Vue3 项目：
    + demo
        + node_modules（存放第三方模块）
        + public（存放静态文件）
            - favicon.ico（图标）
            - index.html （页面模板）
        + src（我们自己写的文件一般放在这个文件夹下）
            + assets（存放资源文件）
            + components（存放公共组件）
            + router.js（路由管理：Router）
            + store.js （状态管理：Vuex）
            + views（存放视图组件）
            - App.vue（页面入口文件）
            - main.js（程序入口文件）
        - package.json（项目配置文件）
        - package-lock.json（项目配置文件）
        - babel.config.js（babel 配置文件）
        - vue.config.js (Vue CLI项目的配置文件，用于自定义Vue CLI构建过程和开发服务)
        - README.md（项目说明文档）
        - ...（其它配置文件）

## 电商后台管理项目的开发模式，涉及技术：
    1、电商后台管理系统整体采用 前后端分离 的开发模式，其中前端项目是基于 Vue 技术栈的 SPA 项目。
        SPA项目是指：单页面应用程序，是指项目的前端部分。
        后端：负责提供api，数据的部分。去访问数据库。
    2、前端项目技术栈：
         Vue、 Vue-router、 Element-UI、 Axios、 Echarts
      后端项目技术栈：
         Node.js、 Express、 Jwt、 Mysql、 Sequelize


## 项目步骤：
    1、项目初始化：
        ① 安装 Vue 脚手架   //查看vue的脚手架的笔记
        ② 通过 Vue 脚手架创建项目   //查看vue的脚手架的笔记
            一定要选中用手动配置文件的方式，这样方便管理。
            eslint的语法版本选择standard config的。
        ③ 配置 Vue 路由     //都是在vue ui上安装的插件
        ④ 配置 Element-UI 组件库    //都是在vue ui上安装的插件
        ⑤ 配置 axios 库 //是在vue ui上安装的依赖
        ⑥ 初始化 git 远程仓库
        ⑦ 将本地项目托管到 Github 或 码云 中

    2、下载postman软件，用来测试和观察网络请求。
        也是就是在postman软件中输入请求地址，查看返回数据，然后看看api接口是否正常。

    3、src目录下的结构：
        1.src目录下main.js文件是整个项目的入口文件。
        2.views目录：主要用于存放模板文件，用于UI渲染。
    
    4、删除app.vue里默认的样式和代码，替换成自己的页面和代码。

    5、项目的入口是从mian.js文件去创建APP.vue，由App.vue来管理整个工程的路由。

## 登录业务：
    实现步骤：
        1.把vue创建的hello  word哪些代码和路由全部删掉。
        2.在componets目录下创建Login.vue,用于管理登录模块的数据交互。
        3.因为会用到less语法，所以需要在vue ui上按照less,less-loader的开发依赖，然后在vue ui上重启项目。
        4.element-ui需要在element.js中引入相关的ui控件，然后main.js会把相关控件挂载给App.vue使用。

    1、使用token维持状态的方式，来处理服务器跨域访问的问题。
        也就是在网络请求中保留一个token字段，来处理服务器访问另一台服务器时的限制问题。
        1.第一次请求，服务器生成token返回给客户端，后续客户端的所有请求都会带上token字段，服务器用来验证token字段是否有效。
    
    2、通过 Element-UI 组件实现布局（丢弃，vue3需要升级到Elementplus）：
        1.所用到的Element-UI组件里的UI控件： el-form、 el-form-item、 el-input、 el-button、 字体图标
        2.以后还是尽量用终端的npm来管理插件，用vue ui的话，改配置不好改。

## 登录遇到的bug：


## 项目插件配置：
    1、eslint插件：
        1.把.eslintrc.js后缀改为cjs，这样就会认为这个是commonJS的语法的文件，就不会老是报错commonJS转换为ES错误了。
        2.在.eslintrc.cjs下，rules下增加'vue/multi-word-component-names': 0 键值对，这样就不会老是保单个单词命名vue组件的错误了。
        3.eslint8.0版本之后配置文件名改为 eslint.config.js了，所以.eslintrc.cjs无效，以后有什么问题，先去看插件的官网文档该怎么配置。
        4、不能手动创建.eslintrc.cjs文件，需要通过eslint --init命令来初始化自动创建的.eslintrc.cjs文件才会有效。
        在package.json文件中配置eslint：
            "eslintConfig": {
                "root": true, //此项是用来告诉eslint找当前配置文件不能往父级查找
                "env": {
                  "node": true  //此项指定环境的全局变量，下面的配置指定为node环境
                },
                //extends是扩展插件的意思，2个插件Vue必须安装！
                "extends": [  // 此项是用来配置vue.js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
                  "plugin:vue/essential",
                   //这里的插件是：eslint的（eslint-config-standard和eslint-plugin-standard及相关依赖）
                  "standard"
                ],
                  "parserOptions": {
                  "parser": "babel-eslint"//此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
                },
                //第二部分最核心的语法规则（第一个参数数字代表含义：0-"off"，1-"warn",2-"error"）
                "rules": {//规则配置写在这里
                  "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
                   "no-mixed-spaces-and-tabs": ["error", "smart-tabs"]//当 tab 是为了对齐，允许混合使用空格和 tab。
                  "semi": [ "2", "always"],//必须分号结束！
                   "indent": ["0",4] //tab键4个空格
                   ... 其他规则自己添加！！
                },
              }
            }

    2、elementui插件变更为element puls
        1.如果elementplus没有样式，则需要在main.js文件中手动导入import 'element-plus/dist/index.css'。
        2.如果需要使用elementplus的图标icon，则需要导入npm install @element-plus/icons-vue，具体看elementplus的官方文档。
        3.导入静态图标或者图片文件（百度elementplus使用阿里图标库）：
            第一步：引入项目下面生成的fontclass代码：
                    <link rel="stylesheet" type="text/css" href="./iconfont.css">
                    在这里就是：把资源文件放在asset目录下，在main.js文件中引入资源文件的.js文件。
                                import './assets/fonts/iconfont.css'

            第二步：挑选相应图标并获取类名，应用于页面：
                    <i class="iconfont icon-xxx"></i>
                        elemtplus 需要使用插槽，而不能直接属性：
                        <template #prefix>
                            <el-icon class="iconfont icon-xxx"><search /></el-icon>
                        </template>


## npm命令管理：
    1、npm run serve命令： 是执行package.json文件中 "scripts": { "serve": "vue-cli-service serve", 脚本。