
## Vue脚手架简介
    1、在没有Vue脚手架之前，需要我们手动输入终端命令，配置webpack文件打包项目，有了脚手架之后就可以自动化了。
        Vue 脚手架用于快速生成 Vue 项目基础架构，其官网地址为：https://cli.vuejs.org/zh/
        Vue 脚手架就是一个终端命令工具，可以让程序员不必关心项目的构造过程，只写代码就行，也就是构包自动化。

## Vue脚手架的使用

### 1、安装 3.x 版本的 Vue 脚手架：
    npm install -g @vue/cli

### 2、基于3.x版本的脚手架创建vue项目
    // 1. 基于 交互式命令行 的方式，创建 新版 vue 项目
    vue create my-project

    // 2. 基于 图形化界面 的方式，创建 新版 vue 项目
    vue ui  //打开图形页面，然后就可视化创建项目了。

    // 3. 基于 2.x 的旧模板，创建 旧版 vue 项目
    npm install -g @vue/cli-init
    vue init webpack my-project

### Vue 脚手架生成的项目目录结构
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

