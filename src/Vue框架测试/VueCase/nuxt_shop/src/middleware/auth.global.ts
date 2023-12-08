// 全局导航守卫，所有的路由访问都会先经过这里
import stroe from "~/model/sessionStore"

export default defineNuxtRouteMiddleware((to, from) => {

    // return
    // 获取token
    // const tokenStr = window.sessionStorage.getItem('token')

    if (typeof window !== 'undefined') {
        console.log('导航守卫 -- window存在:', window);
     }else {
        console.log('导航守卫 --  window不存在:');
    }

    // console.log('\n经过全局导航守卫auth.global.js了~',from.fullPath)
    // console.log('global路由的token：',stroe.sessionToken,'--get:',stroe.localToken)
    
    // 在实际应用中，你可能不会将每个路由重定向到 `/`
    // 但是在重定向之前检查 `to.path` 是很重要的，否则可能会导致无限重定向循环
    if (to.path !== '/login') {
        if (stroe.sessionToken !== stroe.localToken || stroe.localToken ==="" ){
            console.log('没有token')
            return navigateTo('/login')
        }
    }
    
    if (to.params.id === '1') {
        return abortNavigation()    // 停止当前的导航
    }
    
    
})