import { createApp } from 'vue'
import App from './App.vue'

// 引入路由vue组件
import router from './router/router_index'

// 引入element-plus的ui组件库
import useUIElement from './plugins/element.js'

// 导入字体图标
import './assets/fonts/iconfont.css'

// 导入全局样式表
import './assets/css/global.css'


// 执行vue的app路由，创建根App.vue路由，也就是mount()为手动挂载App.vue的#app组件
const app = createApp(App)
useUIElement(app)
app.use(router).mount('#app')
