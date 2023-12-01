import axios from "axios";
//异步处理网络请求的插件，基于 promise 网络请求库。
/**
 * 1、在这里是相当于通过常规的方法去使用第三方插件axios，而不是在nuxt.config.ts配置使用，这个我也不知道为啥不行。
 *      关于axios的使用，直接去axios官网去看吧，@nuxtjs/axios这个插件用不了，我直接用了axios。
 */
export default defineNuxtPlugin((nuxtApp) => {
    const defaultUrl = "<https://localhost:3000/api>";

    let api = axios.create({
        url: defaultUrl,
        headers: {
            common: {},
        },
    });
    return {
        provide: {  //provide是vue的依赖注入语法
            axios: api,
        },
    };
});