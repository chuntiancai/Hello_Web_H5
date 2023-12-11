/**
 * 1、客户端访问服务端的数据，也需要通过网络请求的方式，在这里就是用useFetch、useAsyncData 和 $fetch访问。
 */
import serverSessionStroe from "../models/severSessionStore";
export default defineEventHandler(async (event) => {
    // console.log('请求了nuxt的login～', event.req)
    console.log('sever 的 处理数据库的reset方法')


    let resData = {
        token:serverSessionStroe.localToken
    }
    return resData

})