// 全局导航守卫，所有的路由访问都会先经过这里
/**
 * 1、不知道为什么这里获取不到window对象，对整个的生命周期还不是很熟悉。要从vue3开始看起了。
 */

import sessionStroe from "~/composables/sessionStore";

export default defineNuxtRouteMiddleware((to, from) => {


    if (to.path === "/"){
        return navigateTo('/login')
    }

    // 在实际应用中，你可能不会将每个路由重定向到 `/`
    // 但是在重定向之前检查 `to.path` 是很重要的，否则可能会导致无限重定向循环
    if (to.path !== '/login') {

        // if (typeof window !== 'undefined') {
        //     console.log('导航守卫 -- window存在:', window.sessionStorage);
        //     if (window.sessionStorage.token === ""){
        //         return navigateTo('/login')
        //     }
            
        //  }else {
        //     console.log('导航守卫 --  window不存在:');
        //     return navigateTo('/login')
        // }

        // if (sessionStroe.localToken ==="" ){
        //     console.log('没有token')
        //     return navigateTo('/login')
        // }
    }
    
    if (to.params.id === '1') {
        return abortNavigation()    // 停止当前的导航
    }
    
    
})