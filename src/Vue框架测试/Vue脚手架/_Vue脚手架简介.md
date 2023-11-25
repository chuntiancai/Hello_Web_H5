
## Vue脚手架简介
    1、在没有Vue脚手架之前，需要我们手动输入终端命令，配置webpack文件打包项目，有了脚手架之后就可以自动化了。
        Vue 脚手架用于快速生成 Vue 项目基础架构，其官网地址为：https://cli.vuejs.org/zh/
        Vue 脚手架就是一个终端命令工具，可以让程序员不必关心项目的构造过程，只写代码就行，也就是构包自动化。
    
    2、vue脚手架是vue公司提供的工具，用于创建项目，管理项目，打包项目，创建一个基于vue开发的项目。

## Vue脚手架的使用步骤

## 1、安装 Vue 的脚手架工具，也就是vue的cli工具：
     3.x 版本的 Vue 脚手架安装：
        npm install -g @vue/cli
     2.x 版本脚手架安装，旧模板，创建 旧版 vue 项目
        npm install -g @vue/cli-init
        vue init webpack my-project

## 2、基于3.x版本的脚手架创建vue项目:
    1. 可以基于 交互式命令行 的方式，创建 新版 vue 项目
        vue create my-project   //在当前目录下创建项目

    2. 也可以基于 图形化界面 的方式，创建 新版 vue 项目
        vue ui  //打开图形页面，然后就可视化创建项目了。通过鼠标点点点创建项目。


##  3、Vue 脚手架创建过程中选择需要集成的插件，依赖的库，配置的路径和方式：
    在终端命令行：
        1.选择vue.config.js配置管理脚手架相关的配置，不要选择package.json 的配置方式。虽然脚手架某种意义上来讲也是属于第三方包，但用框架来理解更合理些。
            因为 package.json 主要用来管理包的配置信息；为了方便维护，推荐将 vue 脚手架相关的配置，单独定义到 vue.config.js 配置文件中。

        2. 键盘上下箭头聚焦选中项，空格选中，回车确认进入下一步配置。
            1.babel,eslint的默认配置方式。
            2.Router 集成路由功能。
            3.不需要历史router。
            4.eslint的语法版本选择standard config的。
            5.lint语法校验选择：lint and save方法。
            6.babel、PostCss、ESlint等工具采用 In Dedicated config files的方式管理，这是语法兼容相关的插件。
            7.是否保存以上6个步骤的流程作为模板，看你喜欢。是的话，下次可以直接选择模板创建，就不用在终端一步步敲键盘了。（虽然vue UI的方式也是通过页面一步步配置。）


##  4、然后Vue 脚手架就会在当前目录中 生成 项目的目录 结构：
    node_modules文件夹  //依赖包存放目录
    public文件夹    //静态资源存放目录
    src文件夹   //组件源码目录。
    babel.config.js文件  //babel配置文件。兼容高级js语法

### 3、Vue 脚手架的自定义配置
    1. 通过 package.json 配置项目：
        // 必须是符合规范的json语法
        "vue": {
            "devServer": {
                   "port": "8888",
                   "open" : true
               }
        },
      注意：不推荐使用这种配置方式。因为 package.json 主要用来管理包的配置信息；为了方便维护，推荐将 vue 脚手架相关的配置，单独定义到 vue.config.js 配置文件中。

    2. 通过单独的配置文件配置项目
        ① 在项目的根目录创建文件 vue.config.js
        ② 在该文件中进行相关配置，从而覆盖默认配置
        // vue.config.js
        module.exports = {
            devServer: {
                port: 8888
            }
        }

