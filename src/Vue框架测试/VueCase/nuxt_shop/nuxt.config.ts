// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/', //配置源代码src路径
  devtools: { enabled: true },
  //钩子重置默认路由
  hooks:{
      'pages:extend' (pages) {
        // 添加一个路由
        pages.push({
          name: 'home',
          path: '/',
          file: '~/pages/myindex.vue'
        })
      }
  },
  //第三方插件
  modules: [
    '@element-plus/nuxt'
  ],
  //按需引入elementPlus里的组件
  elementPlus:{

  }

})
