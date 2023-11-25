<!-- 这是整个app的入口，由vue组件控制 -->
<template>
  <div id="app">
    <!-- 你好，这是APP.vue的根目录 -->
     <!-- 路由占位符，挂在在App.vue的路由UI，都会渲染到这个router-view组件里，通过不断地更换路由，然后就会不断地更换view，所以这就是单页面应用 -->
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >

</style>
