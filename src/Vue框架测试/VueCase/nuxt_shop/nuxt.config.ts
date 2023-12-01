// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/', //配置源代码src路径
  devtools: { enabled: true },
  //钩子重置默认路由
  // hooks:{
  //     'pages:extend' (pages) {
  //       // 添加一个路由
  //       pages.push({
  //         name: 'home',
  //         path: '/',
  //         file: '~/pages/myindex.vue'
  //       })
  //     }
  // },
  //第三方插件
  modules: [
    '@element-plus/nuxt',//ui图标第三方库，相当于全部导入了咯，或者是nuxt给你按需导入了
  ],

 

   //Nuxt 将会将该css文件包含在应用程序的所有页面中。
  css: ['~/assets/css/global.css',
        '~/assets/fonts/iconfont.css'],
  //按需引入elementPlus里的组件
  elementPlus:{

  },
  //配置nuxt应用的默认ip地址
  devServer:{
    host:'127.0.0.1',
    port:3000,
    
  }

})
