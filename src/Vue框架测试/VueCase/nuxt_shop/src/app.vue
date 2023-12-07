<template>
  <!-- 路由出口 -->
  <NuxtPage ></NuxtPage>
</template>
<script setup lang="ts"> 
import sessionStroe from './model/sessionStore';
//挂载钩子,window的dom数完成加载后，就会调用这个方法
//必须在onMounted的时候才能用local和window  
onMounted(() => {
  
  getLoacl()  //获取本地存储放到useState中。
  // console.log('app.vue window完成加载dom树～',window,sessionStroe.createToken())
  // sessionStroe.sessionToken = window.sessionStorage.token 
  //注：window.onbeforeunload 是会在页面关闭或刷新时执行，但是意外关闭的浏览器不会执行这个函数，所以重要的数据记得时不时单独调用一下 setLocal('xxx') 函数
  window.onbeforeunload = () => {
    setLocal() //如果需要调试本地存储数据，记得把这个注释一下
  }
})
</script>
