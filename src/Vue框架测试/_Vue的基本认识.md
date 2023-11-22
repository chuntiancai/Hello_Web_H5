
## Vue基本认识
    渐进式JavaScript框架，是国产框架，官网：https://cn.vuejs.org/v2/guide/
    1、Vue本质上就是一个JS的第三方库(js文件)，基于提供服务的第三方库，也可以称之为框架。
        与JQuery是同等级的框架，但jquery的目的是简化JS，Vue的目的是集成现有的web程序。
        说白了就是对原生JS的又一层封装，一套新的语法，用起来更加简洁，更加方便，更加高效什么的。
        vue的亮点在于：直接可以在标签UI里面填充数据，不用分离得那么明显，有点类似iOS的开发了。

    2、Vue的思想是：声明式渲染→组件系统→客户端路由→集中式状态管理→项目构建。
        Vue 旨在提供一个渐进式框架，它可以与已有的 Web 应用程序集成，使其更加交互式和可维护。
        Vue 强调组件化开发，通过将应用程序分解为更小的可重用部分，从而简化了开发和维护过程。

    3、Vue的设计模式，MVVM设计思想：
        ① M(model)
        ② V(view)
        ③ VM(View-Model)

## Vue使用步骤：
    1、需要提供标签用于填充数据
    2、引入vue.js库文件，在script代码区域配置vue对象，写js代码，配置vue数据。
    3、使用vue的语法做功能了，在html标签内使用vue的语法，vue就会实现相应的功能。
    4、把vue提供的数据填充到标签里面。


##  Element-UI 的基本使用
    Element-UI：一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。 官网地址为： http://element-cn.eleme.io/#/zh-CN
    就是类似jQuery那些，主要用于PC端，你可以直接使用这个库提供的UI组件。可以通过Vue来使用这些UI组件库。
    在官网复制粘贴代码到项目中即可。

    使用步骤：
    1. 基于命令行方式手动安装
        ① 安装依赖包 npm i element-ui –S ② 导入 Element-UI 相关资源
        // 导入组件库
        import ElementUI from 'element-ui';
        // 导入组件相关样式
        import 'element-ui/lib/theme-chalk/index.css';
        // 配置 Vue 插件
        Vue.use(ElementUI);
    
    2. 基于图形化界面自动安装
        ① 运行 vue ui 命令，打开图形化界面
        ② 通过 Vue 项目管理器，进入具体的项目配置面板
        ③ 点击 插件 -> 添加插件，进入插件查询面板
        ④ 搜索 vue-cli-plugin-element 并安装
        ⑤ 配置插件，实现按需导入，从而减少打包后项目的体积