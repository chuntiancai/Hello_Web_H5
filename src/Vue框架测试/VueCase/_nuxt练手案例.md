## 这是用nuxt脚手架搭建的案例，购物后台管理系统。

## 项目入口：
    1、nuxt默认情况下路由打开的组件是app.vue,通过<NuxtPage/>标签路由到的组件是pages/index.vue，如果你想要改掉这些默认的初始路由，可以在nuxt.config.ts增加hooks配置：
        hooks:{
            'pages:extend' (pages) {
              // 添加一个路由，nuxt 钩子可以添加、修改或删除扫描到的路由中的页面。
              pages.push({
                name: 'login',
                path: '/',
                file: '~/pages/list.vue'
              })
            }
        },
    也可以在middleware目录下配置auth.global.ts文件的全局路由，它会优先于app.vue的执行。