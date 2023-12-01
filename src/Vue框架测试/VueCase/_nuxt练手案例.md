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

## 项目安装第三方插件：
  1、安装Element Plus和Element Plus的图标库。
        !!! 官网有教程，直接看官网
        1.npm install element-plus --save     //安装element-plus
        2.npm i @element-plus/nuxt -D    //安装 Nuxt Element Plus 模块,已经包含了图标库。
        4.在 nuxt.config.ts 文件中进行配置，添加 Element Plus 模块和 CSS 样式：
            import { defineNuxtConfig } from 'nuxt3'
            export default defineNuxtConfig({
                devtools: { enabled: true },
                modules: [
                    '@element-plus/nuxt'
                ]
            })
  
  2、安装axios，网络处理插件：
    1.这个有nuxt的专门版本@nuxtjs/axios，去官网查看安装教程。
      npm install @nuxtjs/axios
    2.在nuxt.config.ts 文件中进行配置：
      export default {
        modules: [
          '@nuxtjs/axios',
        ],      

        axios: {
          // proxy: true //这里写你对axios的配置
        }
      }

