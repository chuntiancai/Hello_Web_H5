
## 这是一个后台管理系统，不是用户webApp

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


    


## 项目插件配置：
    1、eslint插件：
        1.把.eslintrc.js后缀改为cjs，这样就会认为这个是commonJS的语法的文件，就不会老是报错commonJS转换为ES错误了。
        2.在.eslintrc.cjs下，rules下增加'vue/multi-word-component-names': 0 键值对，这样就不会老是保单个单词命名vue组件的错误了。
